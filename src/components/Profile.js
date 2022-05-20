import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { Link } from 'react-router-dom';
import avatar from '../images/perfil.jpg';

export function Profile() {
    return (
        <section className="profile__container flex flex-wrap">
            <article className="avatar">
                <img src={avatar} className="avatar__image" alt="Avatar Asarael Navarro Beltrán" />
                <h1 className="avatar__name">Asarael Navarro</h1>
                <small className="avatar__info">El / He / Him - 38 años</small>
            </article>
            <article className="contact">
                <Link className="contact__link mail" to={'mailto:asarael.navarro@gmail.com'}>
                    <FontAwesomeIcon icon={solid('envelope')} />  asarael.navarro@gmail.com
                </Link>
                <Link className="contact__link behance" to={'https://www.behance.net/asarael_navarro'}>
                    <FontAwesomeIcon icon={brands('behance')} />  /asarael_navarro
                </Link>
                <Link className="contact__link github" to={'https://github.com/AsaraelNavarro/'}>
                    <FontAwesomeIcon icon={brands('github')} />  @AsaraelNavarro
                </Link>
            </article>
        </section>
    )
}