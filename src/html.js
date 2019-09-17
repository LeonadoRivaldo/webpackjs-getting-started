export function creatElement(tagname, opts){
    const elem = document.createElement(tagname);

    if(opts){
        const { classes, id } = opts;
        if(classes){
            classes.forEach(_class => {
                elem.classList.add(_class);
            });
        }

        if(id){
            elem.id = id;
        }
    }


    return elem;

}