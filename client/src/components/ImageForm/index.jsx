import React, {useState} from 'react'

const ImageForm = () => {
    const [fileState, setFileState] = useState()
    const handleReaderLoaded = (readerEvt)=>{
        let binaryString = readerEvt.target.result
        console.log(btoa(binaryString));
        setFileState({base64TextString: btoa(binaryString)})
    }

    const handleImageUpload = (e)=>{
        console.log("file to upload", e.target.files[0])
        let file = e.target.files[0]

        if (file){
            const reader = new FileReader();
            reader.onload = handleReaderLoaded.bind()

            reader.readAsBinaryString(file)

        }
    }
    return (
        <div>
           <form onChange={e=> handleImageUpload(e)}>
            <input type="file" name="image" id={"file"} accept=".jpg, .png, .jpg" />
            <input type="submit"/>
           </form> 
        </div>
    )
}

export default ImageForm
