import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Input,
    InputGroup,
} from 'reactstrap';
import { questionData } from '../Utils/Constant';

const QuetionsBNU = () => {
    const [open, setOpen] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('UEL_Data')
    const [searchValue, setSearchValue] = useState('')
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    useEffect(() => {
        console.log(selectedUniversity)
    }, [selectedUniversity])

    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between mt-3 '>
                    <div className='w-50'>
                        <InputGroup>
                            <Input
                                type='text'
                                placeholder='Search...'
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </InputGroup>
                        <br />
                    </div>
                    <div className='w-25'>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => setSelectedUniversity(e.target.value)}>
                            <option value="BNU_Data" selected>BNU</option>
                            <option value="UEL_Data">UEL</option>
                        </select>
                    </div>
                </div>
                <p><b>Passport</b>No : W0690587, Ex Date : 09/08/2032 , <b>Student Reference</b>2438021 , <b>Course Duration</b>24 May 2023 to 24 May 2024 , <b>Fee</b>14760 (2000 Scho) </p>
                <div>
                    <Accordion flush open={open} toggle={toggle}>
                        {
                            questionData[selectedUniversity].filter((e) => searchValue.length > 0 ? e.question.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) : true).map((e, index) => {
                                return (
                                    <AccordionItem>
                                        <AccordionHeader targetId={index + 1} onClick={() => toggle(index + 1)}><p className='fw-bold' dangerouslySetInnerHTML={{ __html: e.question }}></p></AccordionHeader>
                                        <AccordionBody accordionId={index + 1} >
                                            <p dangerouslySetInnerHTML={{ __html: e.answer }}></p>
                                        </AccordionBody>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default QuetionsBNU