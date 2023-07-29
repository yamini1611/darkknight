import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';
import '../styles/Inventory.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Inventory = () => {
  const [pistol, setPistol] = useState([]);
  const [shotgun, setShotgun] = useState([]);
  const [SMG, setSMG] = useState([]);
  const [Assaultrifle, setAssaultrifle] = useState([]);
  const [Rifle, setRifle] = useState([]);
  const [special, setSpecial] = useState([]);



  useEffect(() => {
    FetchDetails();
  }, []);

  const FetchDetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/Pistol');
      const pistolData = response.data;
      const response1 = await axios.get('http://localhost:4000/ShotGun');
      const shotgunData = response1.data;
      const response2 = await axios.get('http://localhost:4000/SMG');
      const SMGData = response2.data;
      const response3 = await axios.get('http://localhost:4000/Assault-Rifle');
      const assaultRifleData = response3.data;
      const response4 = await axios.get('http://localhost:4000/Rifle');
      const rifleData = response4.data;
      const response5 = await axios.get('http://localhost:4000/Special');
      const specialWeaponsData = response5.data;

      setPistol(pistolData);
      setShotgun(shotgunData);
      setSMG(SMGData);
      setAssaultrifle(assaultRifleData);
      setRifle(rifleData);
      setSpecial(specialWeaponsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div id='inventorybg'>
      <h3 style={{ textAlign: "center", fontFamily: "Quicksand, sans-serif", fontSize: 55, color: "white" }}> Weaponary</h3>
      <h3 id='weapons'>Pistols</h3>
      <CardGroup id='CardGroup'>
        {pistol.map((pistols) => (
          <Card className='card' id='card' key={pistols.id}>
            <Link to={`/pistoldisplay/${pistols.id}`} key={pistols.id}>
              <Card.Img src={pistols.image} alt='' height={200} width={200} id='pistolimg' className='card-img-spin' />
            </Link>
            <h4 className='quick-sand  p-2'> {pistols.Name}</h4>
          </Card>
        ))}
      </CardGroup>

      <br></br><br></br>
      <h1 className='quick-sand text-white p-2'>ShotGun</h1>
      <CardGroup id='CardGroup'>
        {shotgun.map((shotgun) => (

          <Card className='card' id='card' key={shotgun.id} >
            <Link to={`/shotgundisplay/${shotgun.id}`} key={shotgun.id}> <Card.Img src={shotgun.image} alt='' height={200} width={200} id='pistolimg' className='card-img-spin' /></Link>
            <h4 id='name'> {shotgun.Name}</h4>
          </Card>
        ))}
      </CardGroup>
      <br></br><br></br>
      <h1 className='quick-sand text-white p-2'>SMG</h1>
      <CardGroup id='CardGroup'>
        {SMG.map((SMG) => (

          <Card key={SMG.id} className='card' id='card' >
            <Link to={`/SMGdisplay/${SMG.id}`} key={SMG.id}> <Card.Img src={SMG.image} alt='' height={200} width={200} id='pistolimg' className='card-img-spin' />
            </Link><h4 id='name'> {SMG.Name}</h4>
          </Card>
        ))}
      </CardGroup>
      <br></br><br></br>
      <h1 className='quick-sand text-white p-2'>Assault Rifle</h1>
      <CardGroup id='CardGroup'>
        {Assaultrifle.map((Assault) => (
          <Card key={Assault.id} className='card' id='card'>
            <Link to={`/Assaultrifledisplay/${Assault.id}`} key={Assault.id}><Card.Img src={Assault.image} alt='' height={200} width={200} id='pistolimg' className='card-img-spin' /></Link>
            <h4 id='name'> {Assault.Name}</h4>
          </Card>
        ))}
      </CardGroup>
      <br></br><br></br>
      <h1 className='quick-sand text-white p-2'>Rifle</h1>
      <CardGroup id='CardGroup'>
        {Rifle.map((Rifle) => (
          <Card key={Rifle.id} className='card' id='card'>
            <Link to={`/Rifledisplay/${Rifle.id}`} key={Rifle.id}><Card.Img src={Rifle.image} alt='' height={200} width={200} id='pistolimg' className='card-img-spin' /></Link>
            <h4 id='name'> {Rifle.Name}</h4>
          </Card>
        ))}
      </CardGroup>
      <br></br><br></br>
      <h1 className='quick-sand text-white p-2'>Special Weapons</h1>
      <CardGroup id='CardGroup'>
        {special.map((specials) => (
          <Card key={specials.id} className='card' id='card'>
            <Link to={`/specialdisplay/${specials.id}`} key={specials.id}><Card.Img src={specials.Image} alt='' height={200} width={200} id='pistolimg' className='card-img-spin' /></Link>
            <h4 id='name'> {specials.Name}</h4>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};




export const Pistoldisplay = () => {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeaponDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Pistol/${id}`);
        setWeapon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weapon details:', error);
        setLoading(false);
      }
    };

    fetchWeaponDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weapon) {
    return <div>Weapon not found</div>;
  }
  const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum}`;
  };

  const handlePurchase = async () => {
    try {
      const weaponWithId = { ...weapon, id: generateRandomId() };

      await axios.post('http://localhost:4000/purchase', weaponWithId);
      toast.success('Weapon purchased successfully!', {
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error purchasing weapon:', error);
    }
  };
  return (
    <div id='pk'>
      <h3 style={{ textAlign: "center", fontFamily: "Quicksand, sans-serif", fontSize: 55, color: "white" }}>DarkKnight Armory</h3>
      <h3 id='pname'>{weapon.Name}</h3>
      <img src={weapon.image} alt={weapon.Name} height={400} width={400} id='imgpro' />
      <p id='points'>BatCoins:{weapon.points}</p>
      <button id='button' onClick={handlePurchase}>
        <span id='span'>PURCHASE NOW</span>
        

      </button>    </div>
  );
};

export const Shotgun = () => {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeaponDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/ShotGun/${id}`);
        setWeapon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weapon details:', error);
        setLoading(false);
      }
    };

    fetchWeaponDetails();
  }, [id]);
  const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum}`;
  };

  const handlePurchase = async () => {
    try {
      const weaponWithId = { ...weapon, id: generateRandomId() };

      await axios.post('http://localhost:4000/purchase', weaponWithId);
      toast.success('Weapon purchased successfully!', {
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error purchasing weapon:', error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weapon) {
    return <div>Weapon not found</div>;
  }

  return (
    <div id='pk'>
      <h3 style={{ textAlign: "center", fontFamily: "Quicksand, sans-serif", fontSize: 55, color: "white" }}>DarkKnight Armory</h3>
      <h3 id='pname'>{weapon.Name}</h3>
      <img src={weapon.image} alt={weapon.Name} height={400} width={400} id='imgpro' />
      <p id='points'>BatCoins: {weapon.points}</p>
      <button id='button' onClick={handlePurchase}>
        <span id='span'>PURCHASE NOW</span>
      </button>    </div>
  );
};
export const SMGdisplay = () => {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeaponDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/SMG/${id}`);
        setWeapon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weapon details:', error);
        setLoading(false);
      }
    };

    fetchWeaponDetails();
  }, [id]);
  const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum}`;
  };

  const handlePurchase = async () => {
    try {
      const weaponWithId = { ...weapon, id: generateRandomId() };

      await axios.post('http://localhost:4000/purchase', weaponWithId);
      toast.success('Weapon purchased successfully!', {
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error purchasing weapon:', error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weapon) {
    return <div>Weapon not found</div>;
  }

  return (
    <div id='pk'>
      <h3 style={{ textAlign: "center", fontFamily: "Quicksand, sans-serif", fontSize: 55, color: "white" }}>DarkKnight Armory</h3>
      <h3 id='pname'>{weapon.Name}</h3>
      <img src={weapon.image} alt={weapon.Name} height={400} width={400} id='imgpro' />
      <p id='points'>BatCoins:{weapon.points}</p>
      <button id='button' onClick={handlePurchase}>
        <span id='span'>PURCHASE NOW</span>
      </button>    </div>
  );
};

export const AssaultRifle = () => {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeaponDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Assault-Rifle/${id}`);
        setWeapon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weapon details:', error);
        setLoading(false);
      }
    };

    fetchWeaponDetails();
  }, [id]);
  const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum}`;
  };

  const handlePurchase = async () => {
    try {
      const weaponWithId = { ...weapon, id: generateRandomId() };

      await axios.post('http://localhost:4000/purchase', weaponWithId);
      toast.success('Weapon purchased successfully!', {
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error purchasing weapon:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weapon) {
    return <div>Weapon not found</div>;
  }

  return (
    <div id='pk'>
      <h3 style={{ textAlign: "center", fontFamily: "Quicksand, sans-serif", fontSize: 55, color: "white" }}>DarkKnight Armory</h3>
      <h3 id='pname'>{weapon.Name}</h3>
      <img src={weapon.image} alt={weapon.Name} height={500} width={600} id='imgpro' />
      <p id='points'>BatCoins:{weapon.points}</p>
      <button id='button' onClick={handlePurchase}>
        <span id='span'>PURCHASE NOW</span>
      </button>    </div>
  );
};

export const Rifle = () => {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeaponDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Rifle/${id}`);
        setWeapon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weapon details:', error);
        setLoading(false);
      }
    };

    fetchWeaponDetails();
  }, [id]);
  const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum}`;
  };

  const handlePurchase = async () => {
    try {
      const weaponWithId = { ...weapon, id: generateRandomId() };

      await axios.post('http://localhost:4000/purchase', weaponWithId);
      toast.success('Weapon purchased successfully!', {
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error purchasing weapon:', error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weapon) {
    return <div>Weapon not found</div>;
  }

  return (
    <div id='pk'>
      <h3 style={{ textAlign: "center", fontFamily: "Quicksand, sans-serif", fontSize: 55, color: "white" }}>DarkKnight Armory</h3>
      <h3 id='pname'>{weapon.Name}</h3>
      <img src={weapon.image} alt={weapon.Name} height={400} width={400} id='imgpro' />
      <p id='points'>BatCoins:{weapon.points}</p>
      <button id='button' onClick={handlePurchase}>
        <span id='span'>PURCHASE NOW</span>
      </button>    </div>
  );
};

export const Special = () => {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeaponDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Special/${id}`);
        setWeapon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weapon details:', error);
        setLoading(false);
      }
    };

    fetchWeaponDetails();
  }, [id]);
  const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum}`;
  };

  const handlePurchase = async () => {
    try {
      const weaponWithId = { ...weapon, id: generateRandomId() };

      await axios.post('http://localhost:4000/purchase', weaponWithId);
      toast.success('Weapon purchased successfully!', {
        position: 'top-center'
      });
    } catch (error) {
      console.error('Error purchasing weapon:', error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weapon) {
    return <div>Weapon not found</div>;
  }

  return (
    <div id='pk'>
      <h3 style={{ textAlign: "center", fontFamily: "Quicksand, sans-serif", fontSize: 55, color: "white" }}>DarkKnight Armory</h3>
      <h3 id='pname'>{weapon.Name}</h3>
      <img src={weapon.Image} alt={weapon.Name} height={400} width={400} id='imgpro' />
      <p id='points'>BatCoins :{weapon.points}</p>
      <button id='button' onClick={handlePurchase}>
        <span id='span'>PURCHASE NOW</span>
      </button>    </div>
  );
};



export default Inventory;
