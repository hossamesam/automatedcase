textinput = "«منذ سنوات وأنا أتابع ما يحدث فى مستشفى الأطفال للسرطان «٥٧٣٥٧» وكثيرا ما تضاربت الأخبار حولها خاصة ما يتعلق بتبرعات المواطنين من مصر والدول العربية .. وقد تعرض المستشفى لحملات ضارية كانت سببا فى توقف التبرعات ورغم صدور أحكام قضائية تبرئ إدارة المستشفى من الاتهامات التى نسبت إليها إلا أن التبرعات لم ترجع كما كانت وأصبح المستشفى مهددا بالإغلاق، والقضية الآن تتجاوز كل ما أحاط بالمستشفى من الاتهامات ولكننا الآن أمام كارثة تهدد حياة آلاف الأطفال ولا ينبغى أن يغلق المستشفى لأى سبب من الأسباب خاصة أن أحكاما قضائية برأت المسئولين فيه.. وفى تقديرى أن الدولة لابد أن تتدخل لإنقاذ المستشفى خاصة أنه الان يتمتع بسمعة دولية .. وقد نجح فى تنفيذ برامج علاجية لا تقل عن ما يحدث فى أوروبا وأمريكا.. وهنا أقترح أن تتدخل الدولة لإنقاذ المستشفى حتى لو تطلب الأمر دعما ماليا سريعا .. إن د . شريف أبو النجا المسئول عن المستشفى أعلن أن ما بقى من الأموال فى ميزانية المستشفى لا يتجاوز ٣٠٠ مليون جنيه وهى تغطى الالتزامات المطلوبة أربعة شهور فقط .. ولا أتصور أن تغيب وزارة الصحة عن هذا المشهد لأنه يدخل فى صميم مسئوليتها حتى لو كان مشروعا أهليا.. وهنا أتساءل أين أثرياء مصر من رجال الأعمال وأصحاب الشركات والفنانين .. إن هذه الكوكبة لابد أن تقود حملة واسعة لعودة التبرعات إلى المستشفى وأن تشارك القنوات الفضائية ووسائل الإعلام المختلفة فى حملات إعلانية مجانية لإنقاذ المستشفى فى هذه الظروف الصعبة وأن يمتد ذلك إلى المتبرعين فى الدول العربية .. إن إغلاق مستشفى يعالج سرطان الأطفال كارثة بكل المقاييس والمطلوب الآن موقف جاد وحاسم من الدولة والمؤسسات المالية ورجال الأعمال والمواطنين وعلينا أن نغلق كل الملفات التى شككت فى المستشفى لتبدأ صفحة جديدة من الحرص والشفافية والمسئولية ..»[1]"
splitTextBySentences(textinput, 100)

function splitTextBySentences(text, maxWords) {
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
    // طباعة آخر جزء إذا وجد
    if (chunk.trim()) {
        chunks.push(chunk.trim());
    }

    console.log(`chunks: ${chunks.length}`, chunks);
    return chunks;
}
// var FormElement = document.getElementById("myForm")
// const input = document.querySelector('input.input.rtl.input-ar');
// var textinput = "dessssssfult";
// input.focus();
// input.value = textinput;
// input.dispatchEvent(new Event('input', { bubbles: true }));
// input.blur();
// if (FormElement) {
//     FormElement.addEventListener("submit", (event) => {
//         // event.preventDefault(); // Prevent actual form submission
//         textinput = event.target.textareaInput.value;
//         alert(textinput);
//     });
// }

// var language = document.getElementById("myForm")
// var textinput;
// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent actual form submission
//     textinput = event.target.textareaInput.value;
//     alert(textinput);
// });


// const input = document.querySelector('input.input.rtl.input-ar');
// if (input && textinput) {
//     input.value = textinput;
// }

// splitTextBySentences(textinput, 100);
// function splitTextBySentences(text, maxWords) {
//     // تقسيم النص إلى جمل بناءً على علامات الترقيم
//     const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
//     let chunk = '';
//     let wordCount = 0;

//     for (let sentence of sentences) {
//         const sentenceWords = sentence.trim().split(/\s+/).length;
//         if (wordCount + sentenceWords > maxWords && chunk) {
//             chunk = '';
//             wordCount = 0;
//             return chunk.trim();
//         }
//         chunk += sentence + ' ';
//         wordCount += sentenceWords;
//     }
//     // طباعة آخر جزء إذا وجد
//     if (chunk.trim()) {
//         return chunk.trim();
//     }
// }

