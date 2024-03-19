'use client';
import RegistrationForm from '@/components/RegistrationForm';
import RegistrationTable from '@/components/RegistrationTable';
import { useState, useEffect, MouseEvent } from 'react';

export type Shoe = {
    title: string;
    description: string;
    brand: string;
}

const Register = () => {
    const [btnRegister, setBtnRegister] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('')
    const [shoes, setShoes] = useState<Shoe[]>([]);
    const [shoesIndex, setShoesIndex] = useState<number>(0);
    const [errors, setErrors] = useState('')
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('shoes')!);
        if (data) setShoes(data);
    }, []);

    const validate = () => {
      if(!title){
        setErrors('O titulo é obrigatório')
        return
      }
      if(!description){
        setErrors('A descrição do produto é obrigatória')
        return
      }
      if(!brand){
        setErrors('Selecione uma marca')
        return
      }
      return true
    };

    const cleanFields = () => {
        setTitle('');
        setDescription('');
        setBrand('')
        setErrors('')
    };

    const onSave = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSubmitted(true)
        const errorValidation = validate()
        if(!errorValidation) return
        setShoes((prevShoes) => [...prevShoes, { title, description, brand }]);
        localStorage.setItem('shoes', JSON.stringify([...shoes, { title, description, brand }]));
        cleanFields();
    };

    const onUpdate = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSubmitted(true)
        const copyShoes = [...shoes];
        copyShoes[shoesIndex] = { title, description, brand };
        setShoes(copyShoes);
        localStorage.setItem('shoes', JSON.stringify([...copyShoes]))
        cleanFields();
        setBtnRegister(true);
    };

    const onDelete = (e : MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const copyShoes = [...shoes];
        copyShoes.splice(shoesIndex, 1);
        setShoes(copyShoes);
        localStorage.setItem('shoes', JSON.stringify([...copyShoes]))
        cleanFields();
        setBtnRegister(true);
        setSubmitted(false)
    };

    const onSelect = (index: number) => {
        setShoesIndex(index); //setando para poder depois usar em onDelete, update...
        setTitle(shoes[index].title);
        setDescription(shoes[index].description);
        setBrand(shoes[index].brand)
        setBtnRegister(false);
        setSubmitted(false)
    };

    const onCancel = (e : MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBtnRegister(true);
        cleanFields();
        setSubmitted(false)
    };
    return (
        <div>
            <h1 className="text-center text-5xl">Cadastros...</h1>
            <RegistrationForm
                btnRegister={btnRegister}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                brand={brand}
                errors={errors}
                submitted={submitted}
                setBrand={setBrand}
                onSave={onSave}
                onUpdate={onUpdate}
                onDelete={onDelete}
                onCancel={onCancel}
            />
            <RegistrationTable shoes={shoes} onSelect={onSelect} />
        </div>
    );
};

export default Register;
