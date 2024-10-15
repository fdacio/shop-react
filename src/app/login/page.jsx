// To inform next js, this is a client component
"use client";
import React, { useState } from "react";
//import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import styles from './login.module.css';
import Form from "@/components/form";
import InputText from "@/components/input/text";
import InputPassword from "@/components/input/password";
import Button from "@/components/button";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const _doLogin = (event) => {
        console.log(email);
        console.log(password);
        event.preventDefault();
        router.push('/');
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_login}>
                <Form id="form-login">
                    <InputText funcSet={setEmail} value={email} label="Email" />
                    <InputPassword funcSet={setPassword} value={password} label="Senha" />
                    <Button value="Entrar" onClick={_doLogin} />
                </Form>
            </div>
        </div>
    );
}