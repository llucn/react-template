import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbSkeleton } from '@carbon/react';
import '../content/formio-style.scss';
import { Form, Formio } from '@formio/react';
import pagesConfig from '../configs/pages';
import routesConfig from '../configs/routes';

const Page = () => {
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
        onNavigation={arg => console.log('navigation', arg)}
        onError={arg => console.log('error', arg)}
        onData={arg => console.log('data', arg)}
        onAlert={arg => console.log('alert', arg)}
      />
    </div>
  );
};

export default Page;
