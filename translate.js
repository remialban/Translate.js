function Translate(languages, defaultLanguage)
{

    var elements=document.querySelectorAll("[data-translate]")  
    var translations = null
    var defaultTranslations = null
    languages.map((item) => {
        item.lang.map((lang) => {
            if(lang == navigator.language)
            {
                translations = item.trans
            }
            if(lang == defaultLanguage)
            {
                defaultTranslations = item.trans
            }
        })
        
    })
    
    if(translations == null)
    {
        translations = defaultTranslations
    }
    elements.forEach((e) => {
        if(translations[e.dataset.translate]== undefined)
        {
            e.innerHTML = defaultTranslations[e.dataset.translate]
        } else 
        {
            e.innerHTML = translations[e.dataset.translate]
        }
    })

    document.querySelector("html").setAttribute("lang", navigator.language.substr(0,2))
}
