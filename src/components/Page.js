import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import '../content/formio-style.scss';
import { Form, Formio } from '@formio/react';
import pagesConfig from '../configs/pages';
import routesConfig from '../configs/routes';

const Page = () => {
  const history = useHistory();
  var { name } = useParams();
  if (!name) {
    name = 'index';
  }

  const [title, setTitle] = useState('');
  const [components, setComponents] = useState({});
  const [submission, setSubmission] = useState({});

  useEffect(() => {
    const rs = routesConfig.routes.filter(r => r.name === name);
    if (rs && rs.length > 0) {
      setTitle(rs[0].title);
      const ps = pagesConfig.pages.filter(p => p.name === rs[0].page);
      if (ps && ps.length > 0) {
        setComponents(ps[0].components);
      }
    }
  }, [name]);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem as={Link} href="/">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem as={Link} href={'/' + name}>
          {title}
        </BreadcrumbItem>
      </Breadcrumb>
      <Form
        form={components}
        submission={submission}
        onChange={arg => setSubmission({ data: arg.data })}
        onError={arg => console.log('error', arg)}
        onAlert={arg => console.log('alert', arg)}
        onData={data => {
          setSubmission({ data: data });
        }}
        onNavigate={navigate => {
          history.push(navigate.route);
        }}
      />
    </div>
  );
};

export default Page;
