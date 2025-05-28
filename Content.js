var input = document.querySelector('input.input.rtl.input-ar');
input.focus();
input.value = "خاص محمد عصام";
input.dispatchEvent(new Event('input', { bubbles: true }));
input.blur();
var submitOfapp = document.querySelector('button.is-primary');
var datafromHTML = []
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

chrome.runtime.onMessage.addListener(async (message) => {

    splitTextBySentences(message.data, 10);

    async function handleMessage(DataFromArray) {
        input.focus();
        input.value = DataFromArray;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.blur();
        submitOfapp.click();

        // انتظر نصف دقيقة (30 ثانية) قبل المتابعة
        await delay(3000);

        console.log('====================================');
        console.log(DataFromArray.length, " :", DataFromArray);
        console.log('====================================');
        // يمكنك هنا التقاط البيانات الجديدة من الصفحة بعد الاستجابة
        console.log(extractWordsAndPos());
    }

    async function splitTextBySentences(text, maxWords) {
        const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
        let chunks = [];
        let chunk = '';
        let wordCount = 0;

        for (let sentence of sentences) {
            const sentenceWords = sentence.trim().split(/\s+/).length;
            if (wordCount + sentenceWords > maxWords && chunk) {
                chunks.push(chunk.trim());
                chunk = '';
                wordCount = 0;
            }
            chunk += sentence + ' ';
            wordCount += sentenceWords;
        }
        if (chunk.trim()) {
            chunks.push(chunk.trim());
        }

        // هنا نستخدم حلقة for...of مع await
        for (const element of chunks) {
            await handleMessage(element);
            // إذا أردت وقت انتظار إضافي بين كل عنصر، أضف await delay(30000) هنا أيضاً
        }
        exportToCSV(datafromHTML);
        console.log(`datafromHTML: `, datafromHTML);
        console.log(`chunks: ${chunks.length}`, chunks);
    }

    function extractWordsAndPos() {
        const tokens = document.querySelectorAll('.token');
        const result = [];
        tokens.forEach(token => {
            const word = token.querySelector('.word')?.textContent || '';
            const pos = token.querySelector('.pos')?.textContent || '';
            result.push({ word, pos });
        });

        // تحقق إذا كانت النتيجة غير مكررة قبل الإضافة
        const isDuplicate = datafromHTML.some(arr =>
            JSON.stringify(arr) === JSON.stringify(result)
        );
        if (!isDuplicate && result.length > 0) {
            datafromHTML.push(result);
        }

        return [...result];
    }

});


function exportToCSV(data) {
    if (!data.length) return;

    let csvRows = [];
    csvRows.push('word,pos');

    data.forEach(arr => {
        arr.forEach(obj => {
            csvRows.push(`"${obj.word}","${obj.pos}"`);
        });
    });

    // أضف BOM في بداية الملف
    const BOM = '\uFEFF';
    const csvString = BOM + csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'datafromHTML.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}