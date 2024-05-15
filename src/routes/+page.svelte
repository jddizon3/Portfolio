<body>
    <section class="main">
        <div class="main-container">
            <div class="column-left">
                <h1>Job Daniel Dizon</h1>
                <p>
                    Computer Systems Engineering student
                    at the University of Alaska Anchorage.
                </p>
            </div>
        </div>
    </section>
    <article class="description">
        <div class="about">
            <h2>About</h2>
            <p>
                insert paragraph here
            </p>
        </div>
        <div class="experience">
            <h2>Experience</h2>
            <p>
                insert paragraph here
            </p>
        </div>
    </article>
</body>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    
    .main {
        background-image: linear-gradient(to bottom right, blue, gray);
    }
    
    .main-container, .description, .about, .experience {
        display: grid;
        grid-template-columns: 1fr;
        height: 45vh;
        padding: 0 calc((100vw - 1300px) / 2);
    }
    
    .column-left, .description, .about, .experience {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: black;
        padding: 0 2rem;
    }
    
    .column-left h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
    }
    
    .column-left p {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        line-height: 1.25;
    }
    
    @media screen and (max-width: 768px) {
        .main-container, .description, .about, .experience {
            grid-template-columns: 1fr;
        }
    }
</style>