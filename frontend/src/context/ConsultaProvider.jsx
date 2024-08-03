import { ConsultaContext } from "./ConsultaContext"

export const ConsultaProvider=({children})=>{
    // console.log(userData);
    // const res = await axios.get(URL_BASE+'/api-reservation/service/');

    return(
        <ConsultaContext.Provider value={{}}>
            {children}
        </ConsultaContext.Provider>
    )
}