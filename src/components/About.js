import React from "react";
import image from ""

function About() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src={image} alt="Zachary Greenberg" width="200" height="200" className="float-left" />
                    <h1 className="name">Zachary Greenberg</h1>
                    <hr />
                    <p>
                        My name is Zach Greenberg, an up and coming full stack developer looking to create great products and sites. I started learning to code and design websites in September of 2020 and I'm eager to jump into the work force to help establish websites from startups to reworks.
                            <br />
                            Currently living in Austin, I worked as a personal assistant to a pediatric neurologist for three years doing everything from tech support to organization and analysis of epilepsy for a non-profit HEAL Kenya.
                            <br />
                            As I continue to learn more about both front end and back end of development of websites, I wish to use all that I learn in future work opportunities to create a fully functioning packaged design and website. With a keen eye for detail, my work will be thoughfuly designed, elegant, and joyful to use.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default About;