import { useState } from "react";
import React from 'react'
import State from "../utils/State";
import { fetchText } from "../utils/fetchdata";
import Code from "./Code";

export default function CodeFromFile(props) {
    const { codefile, className } = props;

    const code = new State(useState(''));
    fetchText(codefile, x => code.set(x));

    return <Code code={code.val()} className={className} />;
}
