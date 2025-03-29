// import Axios from '../utils/Axios'
// import SummaryApi from '../common/SummaryApi'
import Axios from 'axios'

const uploadImage = async (image) => {
    try {
        const formData = new FormData()
        formData.append('image', image)

        const response = await Axios.post('http://localhost:3001/api/file/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        // const response = await Axios({
        //     ...SummaryApi.uploadImage,
        //     data: formData
        // })

        )
        console.log('Response image:', response)
        return response.data
    } catch (error) {
        return error
    }
}

export default uploadImage