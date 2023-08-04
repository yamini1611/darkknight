import React, { useEffect, useState } from 'react'
import '../../components/styles/Weapons.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import Badge from '@mui/material/Badge';
import MyVideoComponent from '../Modal/DarkKnightMovie';
import DarkKnightMovie from '../Modal/DarkKnightMovie';
import { Link } from 'react-router-dom';
const Weapons = () => {
  const [pistols, setPistols] = useState('');
  const [shotGun, setShotGun] = useState('');
  const [SMG, setSMG] = useState('');
  const [assaultRifle, setAssaultRifle] = useState('');
  const [rifle, setRifle] = useState('');
  const [specialWeapons, setspecialWeapons] = useState('');
  var pistolID;
  const [select, setSelect] = useState(false);
  const [chooseWeapons, setChooseWeapons] = useState('');
  const [DarkCoins, setDarkCoins] = useState(0);
  ////
  const [selectedPistolCount, setSelectedPistolCount] = useState(0);
  const [selectedShortgunCount, setselectedShortgunCount] = useState(0);
  const [selectedSMG, setselectedSMG] = useState(0);
  const [selectedassaultRifle, setselectedassaultRifle] = useState(0);
  const [selectedRifle, setselectedRifle] = useState(0);
  const [selectedspecialWeapons, setselectedspecialWeapons] = useState(0);
  ////
  const selectHandler = () => {
    if (!select) {
      setSelect(true)
    } else setSelect(false)
  }
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);


  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const weaponsData = () => {
    axios.get("http://localhost:4000/Pistol")
      .then((response) => {
        setPistols(response.data)
      });
    axios.get("http://localhost:4000/ShotGun")
      .then((response) => {
        setShotGun(response.data)
      });
    axios.get("http://localhost:4000/SMG")
      .then((response) => {
        setSMG(response.data)
      });
    axios.get("http://localhost:4000/Assault-Rifle")
      .then((response) => {
        setAssaultRifle(response.data)
      });
    axios.get("http://localhost:4000/Rifle")
      .then((response) => {
        setRifle(response.data)
      });
    axios.get("http://localhost:4000/Special")
      .then((response) => {
        setspecialWeapons(response.data)
      })
    axios.get("http://localhost:4000/DarkCoins")
      .then((response) => {
        setDarkCoins(response.data[0].Coins);
      })
  }



  const selectWeapons = (weap, id) => {
    var var_weapons;
    if (weap === "Pistol") {
      console.log(id)
      axios.get(`http://localhost:4000/Pistol/${id}`)
        .then((response) => {
          var_weapons = response.data;
          console.log(response.data)
          if (selectedPistolCount < 2) {
            setChooseWeapons(() => [var_weapons]);
            setSelectedPistolCount((prevCount) => prevCount + 1);
            toast.success('Weapon selected!', {
            });
            console.log(var_weapons)
            axios.post("http://localhost:4000/selectWeapons", {
              weaponName: var_weapons.Name,
              image: var_weapons.image,
              DarkCoins: var_weapons.DarkCoins
            })
          } else {
            toast.error('You can select only two pistols!', {
            });
          }
          setChooseWeapons(response.data)
          console.log(response.data)
        })
    }
    ///
    if (weap === "ShotGun") {
      axios.get(`http://localhost:4000/ShotGun/${id}`)
        .then((response) => {
          var_weapons = response.data;
          if (selectedShortgunCount < 2) {
            setChooseWeapons(() => [var_weapons]);
            setselectedShortgunCount((prevCount) => prevCount + 1);
            toast.success('Weapon selected!', {
            });
            axios.post("http://localhost:4000/selectWeapons", {
              weaponName: var_weapons.Name,
              image: var_weapons.image,
              DarkCoins: var_weapons.DarkCoins
            })
          } else {
            toast.error('You can select only two Shot guns!', {
            });
          }
          setChooseWeapons(response.data)
          console.log(response.data)
        })
    }

    ///
    if (weap === "SMG") {
      axios.get(`http://localhost:4000/SMG/${id}`)
        .then((response) => {
          var_weapons = response.data;
          if (selectedSMG < 2) {
            setChooseWeapons(() => [var_weapons]);
            setselectedSMG((prevCount) => prevCount + 1);
            toast.success('Weapon selected!', {
            });
            axios.post("http://localhost:4000/selectWeapons", {
              weaponName: var_weapons.Name,
              image: var_weapons.image,
              DarkCoins: var_weapons.DarkCoins
            })
          } else {
            toast.error('You can select only two smg guns!', {
            });
          }
          setChooseWeapons(response.data)
          console.log(response.data)
        })
    }
    ////
    if (weap === "Assault-Rifle") {
      axios.get(`http://localhost:4000/Assault-Rifle/${id}`)
        .then((response) => {
          var_weapons = response.data;
          if (selectedassaultRifle < 2) {
            setChooseWeapons(() => [var_weapons]);
            setselectedassaultRifle((prevCount) => prevCount + 1);
            toast.success('Weapon selected!', {
            });
            axios.post("http://localhost:4000/selectWeapons", {
              weaponName: var_weapons.Name,
              image: var_weapons.image,
              DarkCoins: var_weapons.DarkCoins
            })
          } else {
            toast.error('You can select only two assualt-rifle guns!', {
            });
          }
          setChooseWeapons(response.data)
          console.log(response.data)
        })
    }
    ////
    if (weap === "Rifle") {
      axios.get(`http://localhost:4000/Rifle/${id}`)
        .then((response) => {
          var_weapons = response.data;
          if (selectedRifle < 2) {
            setChooseWeapons(() => [var_weapons]);
            setselectedRifle((prevCount) => prevCount + 1);
            toast.success('Weapon selected!', {
            });
            axios.post("http://localhost:4000/selectWeapons", {
              weaponName: var_weapons.Name,
              image: var_weapons.image,
              DarkCoins: var_weapons.DarkCoins
            })
          } else {
            toast.error('You can select only two rifle guns!', {
            });
          }
          setChooseWeapons(response.data)
          console.log(response.data)
        })
    }
    ////
    if (weap === "Special") {
      axios.get(`http://localhost:4000/Special/${id}`)
        .then((response) => {
          var_weapons = response.data;
          if (selectedspecialWeapons < 2) {
            setChooseWeapons(() => [var_weapons]);
            setselectedspecialWeapons((prevCount) => prevCount + 1);
            toast.success('Weapon selected!', {
            });
            axios.post("http://localhost:4000/selectWeapons", {
              weaponName: var_weapons.Name,
              image: var_weapons.image,
              DarkCoins: var_weapons.DarkCoins
            })
          } else {
            toast.error('You can select only two special guns!', {
            });
          }
          setChooseWeapons(response.data)
          console.log(response.data)
        })
    }
  }



  const handleWeapons = (e, f) => {
    selectWeapons(e, f);
  }


  useEffect(() => {
    weaponsData();

  }, [])
  return (
    <div className='background-color pb-5 '>
      <div className='d-flex'>
        <Link to='/investigate' className='quick-sand text-white p-2 col-lg-10' style={{ textDecoration: "none", fontSize: 23 }}><i class="fa-solid fa-backward"></i> back</Link>
      </div>
      <div className=' d-flex p-1 container'>

        <h1 className=' quick-sand text-white col-lg-11'>Select Weapons </h1>

        {console.log(chooseWeapons)}
        <Badge badgeContent={chooseWeapons.length} color="primary">
          <Link to="/selected"> <h1 className='p-0 quick-sand text-white'>Chosen</h1></Link>
        </Badge>

      </div>





      {pistols.length > 0 && (
        <div className='background-color text-white quick-sand container'>
          <Container>
            <div className='row  background-color'>
              <h1>Pistols</h1>
              {pistols.map((pistol) => (
                <div className='col-lg-4 mt-5'>
                  <Card style={{ width: '18rem', height: '23rem' }}>
                    <Card.Img variant="top" src={`${pistol.image}`} style={{ width: '18rem', height: '21rem' }} />
                    <Card.Body>
                      <Card.Title>{pistol.Name}</Card.Title>
                      <Card.Text>
                        Damage level: <span className='text-success'><b>Low</b></span>
                      </Card.Text>
                      <Button className='bg-black' onClick={() => handleWeapons("Pistol", pistol.id)} >Add</Button>
                    </Card.Body>
                  </Card>

                </div>

              ))}
            </div>
            {shotGun.length > 0 && (
              <div className='row  background-color'>

                <h1 className='m-3'>Shotguns</h1>
                {shotGun.map((shot) => (
                  <div className='col-lg-4 mt-2'>
                    <Card style={{ width: '18rem', height: '23rem' }}>
                      <Card.Img variant="top" src={`${shot.image}`} style={{ width: '18rem', height: '21rem' }} />
                      <Card.Body>
                        <Card.Title>{shot.Name}</Card.Title>
                        <Card.Text>
                          Damage level: <b className='text-warning'>High</b>
                        </Card.Text>
                        <Button className='bg-black' onClick={() => handleWeapons("ShotGun", shot.id)} >Add</Button>
                      </Card.Body>
                    </Card>
                  </div>

                ))}
              </div>

            )}
            {SMG.length > 0 && (

              <div className='row  background-color'>
                <h1 className='m-3'>SMGs</h1>
                {SMG.map((Submg) => (
                  <div className='col-lg-4 mt-2'>
                    <Card style={{ width: '18rem', height: '23rem' }}>
                      <Card.Img variant="top" src={`${Submg.image}`} style={{ width: '18rem', height: '21rem' }} />
                      <Card.Body>
                        <Card.Title>{Submg.Name}</Card.Title>
                        <Card.Text>
                          Damage level: <b className='text-secondary'> Medium</b>
                        </Card.Text>
                        <Button className='bg-black' onClick={() => handleWeapons("SMG", Submg.id)} >Add</Button>
                      </Card.Body>
                    </Card>
                  </div>

                ))}
              </div>
            )}
            {assaultRifle.length > 0 && (

              <div className='row  background-color'>
                <h1 className='m-3'>Assault Rifle</h1>
                {assaultRifle.map((assault) => (
                  <div className='col-lg-4 mt-2'>
                    <Card style={{ width: '18rem', height: '23rem' }}>
                      <Card.Img variant="top" src={`${assault.image}`} style={{ width: '18rem', height: '21rem' }} />
                      <Card.Body>
                        <Card.Title>{assault.Name}</Card.Title>
                        <Card.Text>
                          Damage level:  <b className='text-warning'>High</b>
                        </Card.Text>
                        <Button className='bg-black' onClick={() => handleWeapons("Assault-Rifle", assault.id)} >Add</Button>
                      </Card.Body>
                    </Card>
                  </div>

                ))}
              </div>
            )}

            {rifle.length > 0 && (

              <div className='row  background-color'>
                <h1 className='m-3'>Rifles</h1>
                {rifle.map((rif) => (
                  <div className='col-lg-4 mt-2'>
                    <Card style={{ width: '18rem', height: '23rem' }}>
                      <Card.Img variant="top" src={`${rif.image}`} style={{ width: '18rem', height: '21rem' }} />
                      <Card.Body>
                        <Card.Title>{rif.Name}</Card.Title>
                        <Card.Text>
                          Damage level:  <b className='text-danger'>Extremely high</b>
                        </Card.Text>
                        <Button className='bg-black' onClick={() => handleWeapons("Rifle", rif.id)} >Add</Button>
                      </Card.Body>
                    </Card>
                  </div>

                ))}
              </div>
            )}
            {specialWeapons.length > 0 && (
              <div className='row  background-color'>
                <h1 className='m-3'>Special Weapons</h1>
                {specialWeapons.map((spl) => (
                  <div className='col-lg-4 mt-2'>
                    <Card style={{ width: '18rem', height: '23rem' }}>
                      <Card.Img variant="top" src={`${spl.image}`} style={{ width: '18rem', height: '21rem' }} />
                      <Card.Body>
                        <Card.Title>{spl.Name}</Card.Title>
                        <Card.Text>
                          Damage level:  <b className='text-danger'>Deadly <i class="fa-solid fa-skull"></i></b>
                        </Card.Text>
                        <Button className='bg-black' onClick={() => handleWeapons("Special", spl.id)} >Add</Button>
                      </Card.Body>
                    </Card>
                  </div>

                ))}

              </div>
            )}

          </Container>

        </div>
      )}
      <DarkKnightMovie className="background-color" show={show} fullscreen={fullscreen} onHide={() => setShow(false)} />
      <ToastContainer />
    </div>
  )
}

export default Weapons