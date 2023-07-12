import NavLinkCustom from "../NavigationLinks/NavLinkCustom.jsx";

export default function LinksList ({links,navLinkClass,navListClass}) {
    const  res=links.map((e,i)=>{
        return <NavLinkCustom navLinkClass={navLinkClass} key={e.direction} direction={e.direction} Icon={e.icon} >
            {e.text}
        </NavLinkCustom>
    })
    return (<ul className={`${navListClass} ${navListClass}`}>{res}</ul> )
}