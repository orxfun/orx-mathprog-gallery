import React from 'react'
import { Button, Carousel, Modal } from 'react-bootstrap';
import State from '../../utils/State';
import { useState } from 'react';

export default function ConciseModel({ conciseModels }) {

    const shownModal = new State(useState(-1));
    const hideModal = () => shownModal.set(-1);

    if (!conciseModels || !conciseModels[0]) {
        return <img src='./img/variable-x.png'></img>;
    } else {

        const modalImage = shownModal.val() < 0 ? null : (
            <Modal fullscreen show={true} onHide={hideModal} className={'model-modal'}>
                <Modal.Header>
                    {conciseModels[shownModal.val()].name}
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={`./data/concise/${conciseModels[shownModal.val()].img}`}
                        alt={conciseModels[shownModal.val()].name}

                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );

        return (
            <div>
                {modalImage}
                <Carousel interval={4000} fade={false} className='models-carousel'>
                    {
                        conciseModels.map((model, m) => {
                            return (
                                <Carousel.Item key={m}>
                                    <h3>{model.name}</h3>
                                    <img
                                        className='d-block w-100'
                                        src={`./data/concise/${model.img}`}
                                        alt={model.name}
                                        onClick={_ => shownModal.set(m)}
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }
}
