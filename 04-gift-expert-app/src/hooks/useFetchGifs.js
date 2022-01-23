import { useEffect, useState } from "react"
import { getGIFsFromAPI } from "../services/getGIFs.service"


export const useFetchGifs = category => {
    const [gifs, setGifs] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGIFsFromAPI(category).then(gifs => {
            setGifs({
                data: gifs,
                loading: false
            })
        })
    }, [category])

    return gifs
}
