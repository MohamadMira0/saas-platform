// رابط الـ API الأساسي الذي سنطبق عليه عمليات CRUD.
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// عناصر الأزرار وسجل النتائج من واجهة الصفحة.
const readBtn = document.getElementById("readBtn");
const createBtn = document.getElementById("createBtn");
const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");
const clearLogBtn = document.getElementById("clearLogBtn");
const resultLog = document.getElementById("resultLog");

// حقول الإدخال الخاصة بعمليات CREATE / UPDATE / DELETE.
const createTitle = document.getElementById("createTitle");
const createBody = document.getElementById("createBody");
const updateId = document.getElementById("updateId");
const updateTitle = document.getElementById("updateTitle");
const updateBody = document.getElementById("updateBody");
const deleteId = document.getElementById("deleteId");

// دالة مساعدة لعرض نتيجة كل عملية داخل صندوق السجل بشكل منسق.
function writeLog(type, message, details) {
    // نضيف توقيت لكل سطر ليسهل تتبع ترتيب العمليات.
    const timestamp = new Date().toLocaleTimeString();
    // إذا كانت هناك تفاصيل إضافية (JSON) نعرضها أسفل الرسالة.
    const info = details ? `\n${JSON.stringify(details, null, 2)}` : "";
    const line = `[${timestamp}] ${type}: ${message}${info}\n\n`;

    // نحذف النص الافتراضي أول مرة فقط عند وصول أول نتيجة فعلية.
    if (resultLog.textContent.includes("-- ستظهر النتائج هنا --")) {
        resultLog.textContent = "";
    }

    // نضيف السطر الجديد بالأعلى ليظهر آخر حدث أولاً.
    resultLog.textContent = line + resultLog.textContent;
}

// دالة موحّدة لتنفيذ fetch مع معالجة الأخطاء وتسجيل النتيجة.
async function safeFetch(url, options, actionName) {
    try {
        // تنفيذ الطلب حسب الرابط والخيارات المرسلة (method, headers, body).
        const response = await fetch(url, options);
        // نقرأ الرد كنص أولاً لأن بعض الردود قد تكون فارغة (مثل DELETE).
        const text = await response.text();
        // إذا النص غير فارغ نحوله JSON، وإلا نخزن null.
        const data = text ? JSON.parse(text) : null;

        // في حال status ليس ناجحًا (خارج 2xx) نسجل فشل ونرجع null.
        if (!response.ok) {
            writeLog("FAIL", `${actionName} فشلت`, {
                status: response.status,
                statusText: response.statusText,
                data
            });
            return null;
        }

        // في حال النجاح نسجل الحالة والبيانات المستلمة.
        writeLog("SUCCESS", `${actionName} نجحت`, {
            status: response.status,
            data
        });
        // نعيد البيانات حتى نستخدمها لاحقًا إذا لزم.
        return data;
    } catch (error) {
        // أي خطأ شبكة/تحويل JSON يصل هنا.
        writeLog("FAIL", `${actionName} فشلت بسبب خطأ بالشبكة أو البيانات`, {
            error: error.message
        });
        return null;
    }
}

// READ: يجلب أول 5 عناصر (GET) عند الضغط على زر القراءة.
readBtn.addEventListener("click", async () => {
    await safeFetch(`${BASE_URL}?_limit=5`, { method: "GET" }, "عملية READ (GET)");
});

// CREATE: ينشئ post جديد (POST) بعد التحقق من تعبئة العنوان والمحتوى.
createBtn.addEventListener("click", async () => {
    // trim لإزالة الفراغات الزائدة قبل الإرسال.
    const title = createTitle.value.trim();
    const body = createBody.value.trim();

    // حماية من الإرسال الناقص.
    if (!title || !body) {
        writeLog("FAIL", "عملية CREATE (POST) فشلت", {
            reason: "الرجاء إدخال العنوان والمحتوى قبل الإنشاء"
        });
        return;
    }

    await safeFetch(
        BASE_URL,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                body,
                userId: 1
            })
        },
        "عملية CREATE (POST)"
    );
});

// UPDATE: يعدّل post موجود (PUT) حسب الـ ID المدخل.
updateBtn.addEventListener("click", async () => {
    // تحويل ID من نص إلى رقم.
    const id = Number(updateId.value);

    // التحقق من أن ID صالح (غير فارغ/0/NaN).
    if (!id) {
        writeLog("FAIL", "عملية UPDATE (PUT) فشلت", {
            reason: "الرجاء إدخال ID صحيح"
        });
        return;
    }

    await safeFetch(
        `${BASE_URL}/${id}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id,
                // إذا ترك المستخدم الحقول فارغة نرسل قيمًا افتراضية.
                title: updateTitle.value.trim() || "Updated Title",
                body: updateBody.value.trim() || "Updated Body",
                userId: 1
            })
        },
        "عملية UPDATE (PUT)"
    );
});

// DELETE: يحذف post حسب الـ ID المدخل.
deleteBtn.addEventListener("click", async () => {
    const id = Number(deleteId.value);

    // التحقق من صحة الـ ID قبل الإرسال.
    if (!id) {
        writeLog("FAIL", "عملية DELETE فشلت", {
            reason: "الرجاء إدخال ID صحيح"
        });
        return;
    }

    await safeFetch(
        `${BASE_URL}/${id}`,
        { method: "DELETE" },
        "عملية DELETE"
    );
});

// يعيد صندوق النتائج إلى النص الافتراضي.
clearLogBtn.addEventListener("click", () => {
    resultLog.textContent = "-- ستظهر النتائج هنا --";
});
