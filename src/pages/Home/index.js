import Illustrator from '~/components/Layout/components/Illustrator';

function Home() {
    return (
        <div>
            <Illustrator
                src={'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/80fef055091949.59766906d8963.png'}
                size="large"
                btnFTitle={'Submit a new task'}
                btnSTitle={'Subscribe & Save'}
                id={'btn-home'}
            />
        </div>
    );
}

export default Home;
