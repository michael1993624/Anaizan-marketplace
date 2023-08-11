

export const itemsLink = (listlink) => {
    return (
      /*   <ul id={H.ul}>
            {
               */  listlink.map((lists, i) => {
                    return (
                        <li>
                            <a href={lists.path}> {lists.title} </a>
                        </li>
                    )
                })
         /*    }
        </ul> */
    )
}

export const showMegaMenu = (list, title) => {

    return (
        <>
            <div>
                <h3> {title} </h3>
                {
                    list.map((lists, i) => {
                        return (
                            <>
                                <li>
                                    <a href={lists.path}> {lists.title} </a>
                                </li>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}


//composant pour l'affichage des sous menus des sous menu du categorie
export const s_link = (link_tab, title) => {
    return (
        <div>
            <h3> {title} </h3>
            {link_tab.map ( (list) => {
                if ((title.includes(list.cat))) {
                    return (
                        <li>
                            <a href={list.path}> {list.title} </a>
                        </li>
                    )
                }
            })}
        </div>
    )
}

