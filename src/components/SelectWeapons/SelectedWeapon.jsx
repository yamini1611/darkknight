import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SelectedWeapons = () => {
    const [selectedWeapons, setSelectedWeapons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/selectWeapons')
            .then((response) => {
                setSelectedWeapons(response.data);
            })
            .catch((error) => {
                console.error('Error fetching selected weapons:', error);
            });
    }, []);
    const handleRemove = (weaponId) => {
        axios.delete(`http://localhost:4000/selectWeapons/${weaponId}`)
            .then(() => {
                setSelectedWeapons((prevWeapons) =>
                    prevWeapons.filter((weapon) => weapon.id !== weaponId)
                );
                toast.success('Weapon removed successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                });
            })
            .catch((error) => {
                console.error('Error deleting weapon:', error);
            });
    };

    return (
        <div className='background-color text-white quick-sand container-fluid min-vh-100  '>
            <div className='container'>
                <h1 className='quick-sand text-white col-lg-11'>Selected Weapons</h1>
                <div className='row background-color'>
                    {selectedWeapons.map((weapon) => (
                        <div className='col-lg-4 mt-2' key={weapon.id}>
                            <Card style={{ width: '18rem', height: '23rem' }}>
                                <Card.Img variant="top" src={weapon.image} style={{ width: '18rem', height: '21rem' }} />
                                <Card.Body>
                                    <Card.Title>{weapon.weaponName}</Card.Title>
                                    <Card.Text>
                                        Damage level: <span className='text-success'><b>{weapon.damageLevel}</b></span>
                                    </Card.Text>
                                    <Button className='bg-black' onClick={() => handleRemove(weapon.id)}>Remove</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SelectedWeapons;
