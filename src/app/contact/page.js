'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { LiaPlaySolid } from "react-icons/lia";
import { Container, Row, Col } from 'react-bootstrap';


import Contact from '../component/Contact';

export default function page() {
    return (
        <main>

            <section>
                <Container fluid p-0>
                    <Contact />
                </Container>
            </section>

        </main>
    )
}
