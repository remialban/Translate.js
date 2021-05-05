function Translate(languages)
{

    var elements=document.querySelectorAll("[data-translate]")

    console.log(navigator.language)
    
    
    var translations = {}
    languages.map((item) => {
        item.lang.map((lang) => {
            if(lang == navigator.language)
            {
                translations = item.trans
            }
        })
        
    })
    
    elements.forEach((e) => {
        e.textContent = translations[e.dataset.translate]
    })
}