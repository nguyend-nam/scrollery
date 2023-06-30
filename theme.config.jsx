import {Logo} from './components/Logo'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo:<header style={{color: '#577D86', fontWeight: 700, fontSize: 20, display: 'flex', gap: 8, alignItems: 'center'}}>
        <Logo width={36} height={36} />
        Scrollery
      </header>,
  logoLink: '/',
  project: {
    link: "https://github.com/nguyend-nam/scrollery",
  },
  footer:{
    text: (
      <span>
        <a href='https://choosealicense.com/licenses/isc/' target='_blank'>
          ISC
        </a>
        {' '}©{' '}
        <a href="https://github.com/nguyend-nam" target="_blank" style={{fontWeight: 600, color: '#577D86'}}>
          Nam Nguyen Dinh
        </a>
        .
      </span>
    ),
  }
};