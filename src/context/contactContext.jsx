'use client'

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { wordpressGraphQlApiUrl } from "../utils/variables";


const ContactContext = createContext({})



export const ContactContextProvider =  ({ children }) => {

   

     const contact = 'test'


  

    return (
        <ContactContext.Provider value={{ contact }}>
            {children}
        </ContactContext.Provider>
    )
};

export const useContactContext = () => useContext(ContactContext);





