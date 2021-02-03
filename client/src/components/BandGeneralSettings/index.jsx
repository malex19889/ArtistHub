import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuthContext } from "../../store/contexts/authContext";

import API from "../../utils/API";

import { useParams } from "react-router-dom";


export default function GeneralSettings(props) {

    let { id } = useParams();
    const [authState, dispatch] = useAuthContext();

    const [updateBandname, setUpdateBandname] = useState("");
    const [updateBandBio, setUpdateBandBio] = useState("");
    const [updateGenre, setUpdateGenre] = useState("");
    const [updateContact, setUpdateContact] = useState("");
    const [updateYoutube, setUpdateYoutube] = useState("");
    const [updateFacebook, setUpdateFacebook] = useState("");
    const [updateInsta, setUpdateInsta] = useState("");
    const [updateTwitter, setUpdateTwitter] = useState("");
    const [band, setBand] = useState();
    const user = {
        bandName: updateBandname,
        bandBio: updateBandBio,
        genre: updateGenre,
        contact: updateContact,
        youtube: updateYoutube.replace("https://", ""),
        facebook: updateFacebook.replace("https://", ""),
        insta: updateInsta.replace("https://", ""),
        twitter: updateTwitter.replace("https://", "")
    };
    useEffect(() => {
        API.bandInfoById(id)
            .then(res => {
                console.log(res.data)
                setBand(res.data);
                setUpdateBandname(res.data.bandName)
                setUpdateBandBio(res.data.bandBio);
                setUpdateGenre(res.data.genre);
                setUpdateContact(res.data.contact);
                setUpdateYoutube(res.data.youtube);
                setUpdateFacebook(res.data.facebook);
                setUpdateInsta(res.data.insta);
                setUpdateTwitter(res.data.twitter);
            })
    }, [id])

    const handleUpdateInfo = (event) => {
        event.preventDefault();
        console.log(user)
        //axios.put required to update band data
        API.bandUpdate(user)
            .then(res => {
                console.log(res)
                window.location.href = "/band/home/" + authState.id
            })
            .catch(err => console.log(err))
    }

    return (
        <Form className="bandregister" onSubmit={handleUpdateInfo}>

            <h2>General Settings</h2>

            <Form.Group controlId="formBandName">
                <Form.Label>Band Name</Form.Label>
                <Form.Control
                    onChange={e => setUpdateBandname(e.target.value)}
                    value={updateBandname}
                    type="bandName"
                    placeholder="Existing information, or blank" />
            </Form.Group>

            {/* add a form.file for new cover photo */}
            {/* add a form.file for added images to a gallery */}

            <Form.Group controlId="formBandBio">
                <Form.Label>Band Biography</Form.Label>
                <Form.Control
                    as="textarea"
                    onChange={e => setUpdateBandBio(e.target.value)}
                    value={updateBandBio}
                    type="bandBio"
                    placeholder="Existing information, or blank" />
            </Form.Group>

            <Form.Group controlId="formGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                    onChange={e => setUpdateGenre(e.target.value)}
                    value={updateGenre}
                    type="genre"
                    placeholder="Existing information, or blank" />
            </Form.Group>

            <Form.Group controlId="contact">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    onChange={e => setUpdateContact(e.target.value)}
                    value={updateContact}
                    type="contact"
                    placeholder="Existing information, or blank" />
            </Form.Group>

            <Form.Group controlId="formYoutube">
                <Form.Label>Youtube Channel</Form.Label>
                <Form.Control
                    onChange={e => setUpdateYoutube(e.target.value)}
                    value={updateYoutube}
                    type="youtube"
                    placeholder="Existing information, or blank" />
            </Form.Group>

            <Form.Group controlId="facebook">
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                    onChange={e => setUpdateFacebook(e.target.value)}
                    value={updateFacebook}
                    type="facebook"
                    placeholder="Existing information, or blank" />
            </Form.Group>
            <Form.Group controlId="insta">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                    onChange={e => setUpdateInsta(e.target.value)}
                    value={updateInsta}
                    type="insta"
                    placeholder="Existing information, or blank" />
            </Form.Group>
            <Form.Group controlId="twitter">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                    onChange={e => setUpdateTwitter(e.target.value)}
                    value={updateTwitter}
                    type="twitter"
                    placeholder="Existing information, or blank" />
            </Form.Group>

            <Button variant="dark" type="submit" handleUpdateInfo={handleUpdateInfo}>
                Submit
            </Button>

        </Form>
    )
}