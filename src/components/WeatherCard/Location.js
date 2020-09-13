import React, { useState} from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Location = ({ city, country, getWeather }) => {
    
    const [query, setQuery] = useState("");
    const [inputMode, setInputMode] = useState(false);
    
    if (inputMode) { 
        return (
            <Container>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                    <FormElement
                        onSubmit={e => {
                            e.preventDefault();
                            getWeather(query);
                        }}
                    >
                    <InputField
                        required
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        />
                        <SearchButton type="submit">Search</SearchButton>
                        <CancelButton onClick={()=> setInputMode(false)}>X</CancelButton>
                        </FormElement>
                </motion.div>
            </Container>
        )
    }

    return (
        <Container>
            <City onClick={()=> setInputMode(true)}> {city} </City>
            <Country> {country} </Country>
        </Container>
    );
};
 
export default Location;

const Container = styled.div`
    text-align: center;
`;

const FormElement = styled.form`
    display: flex;
    position: relative;
    background:  #34495e;
    border-radius: 5px;
`;

const InputField = styled.input`
    padding: 5px;
    width: 100px;
    background: transparent;
    border: none;
    &:focus{
        outline: 0;
    }
    color: white;
`;

const SearchButton = styled.button`
    padding: 5px;
    background: #2c3e50;
    border: none;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    color: white;
    cursor: pointer;
`;

const CancelButton = styled.span`
    font-size: 0.8rem;
    position: absolute;
    background: #566573;
    top: -8px;
    right: -17px;
    cursor: pointer;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 0px 2px rgba(0,0,0,0.4);
`;

const City = styled.h1`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.6rem;
    position: relative;
    cursor: pointer;
    &: hover{
        top: -5px;
    }
`;

const Country = styled.h3`
    font-family: 'Fira-Sans', sans-serif;
    font-size: 1.1rem;
`;