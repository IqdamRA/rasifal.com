import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({resume}) {
  //console.log(resume.database[1].background)
  return (
    <div>
      <main className="main" id="top">
        <section className="pt-7">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center py-6">
                <h1 className="mb-4 fs-9 fw-bold">{resume.database[0].Judul}</h1>
                <p className="mb-6 lead text-secondary">{resume.database[0].desk}</p>
                <div className="text-center text-md-start"><a className="btn btn-primary me-3 btn-lg" href="#!" role="button">{resume.database[0].button}</a></div>
              </div>
              <div className="col-md-6 text-end"><img className="pt-7 pt-md-0 img-fluid" src={resume.database[0].img} width={400} /></div>
            </div>
          </div>
        </section>
        <section className="pt-5 pt-md-9 mb-6" id="feature">
          <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block" style={{ backgroundImage: `url(${resume.database[1].background})`, opacity: '.5' }}>
          </div>
          <div className="container">
            <h1 className="fs-9 fw-bold mb-4 text-center"> {resume.database[1].judul}</h1>
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={resume.database[1].cont[0].img} width={90} alt="Feature" />
                <h4 className="mb-3">{resume.database[1].cont[0].judul}</h4>
                <p className="mb-0 fw-medium text-secondary">{resume.database[1].cont[0].desk}</p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={resume.database[1].cont[1].img} width={53} alt="Feature" />
                <h4 className="mb-3">{resume.database[1].cont[1].judul}</h4>
                <p className="mb-0 fw-medium text-secondary">{resume.database[1].cont[1].desk}</p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={resume.database[1].cont[2].img} width={90} alt="Feature" />
                <h4 className="mb-3">{resume.database[1].cont[2].judul}</h4>
                <p className="mb-0 fw-medium text-secondary">{resume.database[1].cont[2].desk}</p>
              </div>
              <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={resume.database[1].cont[3].img} width={83} alt="Feature" />
                <h4 className="mb-3">{resume.database[1].cont[3].judul}</h4>
                <p className="mb-0 fw-medium text-secondary">{resume.database[1].cont[3].desk}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5" id="validation">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-2 fs-7 fw-bold">{resume.database[2].judul}</h2>
                <p className="mb-4 fw-medium text-secondary">
                {resume.database[2].desk}
                </p>
                <h4 className="fs-1 fw-bold">{resume.database[2].item[0].judul}</h4>
                <p className="mb-4 fw-medium text-secondary">{resume.database[2].item[0].desk}</p>
                <h4 className="fs-1 fw-bold">{resume.database[2].item[1].judul}</h4>
                <p className="mb-4 fw-medium text-secondary">{resume.database[2].item[1].desk}</p>
                <h4 className="fs-1 fw-bold">{resume.database[2].item[2].judul}</h4>
                <p className="mb-4 fw-medium text-secondary">{resume.database[2].item[2].desk}</p>
              </div>
              <div className="col-lg-6"><img className="img-fluid" src={resume.database[2].img} width={450} /></div>
            </div>
          </div>
        </section>
        <section className="pt-5" id="marketing">
          <div className="container">
            <h1 className="fw-bold fs-6 mb-3">{resume.database[3].judul}</h1>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card"><img className="card-img-top" src={resume.database[3].item[0].img} height={195} alt />
                  <div className="card-body ps-0">
                    <h3 className="fw-bold">{resume.database[3].item[0].judul}</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card"><img className="card-img-top" src={resume.database[3].item[1].img} height={195} alt />
                  <div className="card-body ps-0">
                    <h3 className="fw-bold">{resume.database[3].item[1].judul}</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card"><img className="card-img-top" src={resume.database[3].item[2].img} height={195} alt />
                  <div className="card-body ps-0">
                    <h3 className="fw-bold">{resume.database[3].item[2].judul}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-2 pb-lg-5">
          <div className="container">
            <div className="row border-top border-top-secondary pt-7">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
                <p className="fs-2 mb-lg-4">{resume.database[4].item[0].judul}</p>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">{resume.database[4].item[0].desk1}</a></li>
                  <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">{resume.database[4].item[0].desk2}</a></li>
                  <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">{resume.database[4].item[0].desk3}</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-4 order-md-4 order-lg-3">
                <p className="fs-2 mb-lg-4">{resume.database[4].item[1].judul}</p>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">{resume.database[4].item[1].desk1}</a></li>
                  <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">{resume.database[4].item[1].desk2}</a></li>
                  <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">{resume.database[4].item[1].desk3}</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0 order-2 order-md-2 order-lg-4">
                <p className="fs-2 mb-lg-4">{resume.database[4].item[2].judul}</p>
                <form className="mb-3">
                  <input className="form-control" type="email" placeholder={resume.database[4].item[2].input} aria-label="phone" />
                </form>
                <button className="btn btn-primary fw-medium py-1">{resume.database[4].item[2].button}</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="modal fade" id="popupVideo" tabIndex={-1} aria-labelledby="popupVideo" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <iframe className="rounded" style={{ width: '100%', height: 500 }} src="https://www.youtube.com/embed/_lhdhL4UDIo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  )
}
export async function getServerSideProps(context){
  const linkdb = 'http://localhost:5000/';
  const respondb = await fetch(linkdb);
  const datajson = await respondb.json();
  
  return{
    props : {
      resume : datajson
    }
  }
}
