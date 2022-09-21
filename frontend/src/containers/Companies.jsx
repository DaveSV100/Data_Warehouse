import React, { useState , useEffect} from 'react';
import useGetData from '@hooks/useGetData';
import endPoints from '@services/api';
import { deleteCompany } from '@services/api/companies';
import axios from 'axios';
import CompanyModal from '@common/CompanyModal'
import styles from '@styles/Companies.module.scss';
import editIcon from '@images/edit.png';
import deleteIcon from '@images/delete.png';

const Companies = () => {
    const companies = useGetData(endPoints.companies.getCompanies);
    const [remove, setRemove] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [ID, setID] = useState(null);
    const [doIEdit, setDoIEdit] = useState("false");
    const [endpoint, setEndpoint] = useState("Post");
    const [data, setData] = useState("")

    useEffect(() => {
        if(ID != null) {
            console.log("THE ID IS:", ID)
            async function getData() {
                console.log()
                const response = await axios.get(endPoints.companies.getCompany(ID));
                setData(response.data[0].Name);
                console.log("Company:::", response.data)
            }
            getData()
        } else {
            setData(null);
            console.log("there's no id")
        }
    }, [ID])
    
    const handleEdit = (id) => {
        console.log("editing id: ", id);
    }

    const handleDelete = (id) => {
        console.log("eliminando id " + id);
        deleteCompany(id).then(response => console.log(response));
        setRemove(false);
    }

    return (
        <>
        <section className={styles['main-container']}>
            <div className={styles.titles}>
                <ul>
                    <li>Nombre</li>
                    <li>Ciudad</li>
                    <li>Dirección</li>
                    <li>Email</li>
                    <li>Teléfono</li>
                    <li>Acciones</li>
                </ul>
            </div>
            <div className={styles.UsersList}>
                {companies.map(data => (
                    <div className={styles['contact-container']}>
                    <p className={styles.name} key={`name-${data.ID}`}>
                        {data.Name}
                    </p>
                    <p className={styles.city_id} key={`city-${data.ID}`}>
                        {data.City}
                    </p>
                    <p className={styles.direction} key={`direction-${data.ID}`}>
                        {data.Direction}
                    </p>
                    <p className={styles.email} key={`email-${data.ID}`}>
                        {data.Email}
                    </p>
                    <p className={styles.phone} key={`phone-${data.ID}`}>
                        {data.Phone}
                    </p>
                    <div className={styles.actions} key={`actions--${data.ID}`}>
                        <img src={editIcon.src} alt="Editar contacto" key={`edit-${data.ID}`} className={styles.editIcon} onClick={() => {setModalShow(true), handleEdit(data.ID), setID(data.ID), setDoIEdit("false"), setEndpoint("Put") } } />
                        <img src={deleteIcon.src} alt="Borrar contacto" key={`delete-${data.ID}`} className={styles.deleteIcon} onClick={() => {setRemove(true), setID(data.ID) } } />
                    </div>
                </div>
                ))}
                {
                    <CompanyModal
                        key={"companyModal"}
                        show={modalShow}
                        onHide={() => {setModalShow(false), setDoIEdit("true"), setEndpoint("Post"), setID(null) } }
                        id={ID}
                        editing={doIEdit}
                        endpoint={endpoint}
                        data={data}
                    />
                } 
                {
                    remove && 
                    <div className={styles.alert} onClick={()=> setRemove(false)}>
                        <div className={styles.ad}>
                            <h4>¿Seguro que deseas eliminar la companía seleccionada?</h4>
                            <button onClick={() => setRemove(false)}>Cerrar</button>
                            <button onClick={() => handleDelete(ID)}>Eliminar</button>                
                        </div>
                    </div>
                }
            </div>

        </section>
        </>
    );
}

export default Companies;