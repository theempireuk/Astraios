import { Anchor, Box, Button, Heading, Image, Paragraph, Text, Form, FormField, TextInput, MaskedInput, CheckBox, Select } from 'grommet';
import { useState, useCallback } from 'react';
import Feature from '@components/Feature';
import Layout from '@layouts/default';

const content = {
  heading: "Need a custom backend for your app?",
  description: [
    "Deploy production-ready cloud infrastructure to your own AWS account. Build content immediately with Strapi CMS or deploy your own code.",
    "Optimized by experts for security, scalability and cost-effectiveness.",
  ],
  callToAction:  {
    text: "Sign up for beta access",
    link: "#contact"
  },
  callToAction2:  {
    text: "Learn more",
    link: "#features",
    description: "All the information you need to get started."
  },
  blog: {
    heading: "Blog Posts",
    description: "Take a moment to learn about us and our product.",
    articles: [
      {
        buttonTitle: 'Article 1',
        articleTitle: 'We are International',
        articleBody: 'We have reached over 100 coutries with our platform with over 1 million users enjoying this'
      },
      {
        buttonTitle: 'Article 2',
        articleTitle: 'We are fast and reliable',
        articleBody: 'We have reached over 100 coutries with our platform with over 1 million users enjoying this'
      },
      {
        buttonTitle: 'Article 3',
        articleTitle: 'We jus hit 1 million active users',
        articleBody: 'We have reached over 100 coutries with our platform with over 1 million users enjoying this'
      }
    ]
  },
  features: {
    heading: "Features",
    description: "Built to save you time and money.",
    features: [
      {
        image: '/astraios_ui_icon.png',
        title: 'Service Control Centre',
        body: 'Our hand-built UI lets you easily deploy, monitor and manage AWS services across multiple projects. No more wasting time on cloud engineering, Astraios gets you straight into developing fully-featured, content-rich user experiences.',
        reverse: true
      },
      {
        image: '/powered-by-aws.png',
        title: 'AWS Integration',
        body: 'Databases, Servers, File Storage, Email Services and Domain Management, all under one roof means all under one bill. Astraios utilizes auto-scaling spot instance groups to decimate server costs and is built to support projects on multiple AWS accounts.',
        readMore: "https://aws.amazon.com/ec2/spot/",
        reverse: false
      },
      {
        image: 'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png',
        title: 'Container Deployment',
        body: 'Reliable and stateless deployments enable fault tolerant and automatically scaling services so your app can always meet demand. Astraios provides a pre-configured Strapi image by default but you are free to deploy an image of your choice and manage environment variables for total control.',
        readMore: "https://www.docker.com/",
        reverse: true
      },
      {
        image: 'https://strapi.io/assets/strapi-logo-dark.svg',
        title: 'Utilising Strapi',
        body: "Manage user data and build content visually with the world's most popular open-source CMS, Strapi. Supported by a huge community, we love Strapi and we think you will to. Astraios connects Strapi to all of your project's cloud services automatically.",
        readMore: "https://strapi.io/",
        reverse: false
      }
    ]
  },
  contact: {
    heading: "Sign up for beta access",
    description: <>Launching 2021.<br />Stay in the loop with email updates.</>
  }
}

const formData = {
  jobOptions: [
    "Software Developer - Agency",
    "Software Developer - Product",
    "Software Developer - Freelance",
    "Product Manager",
    "Project Manager",
    "Business Owner",
    "Hobbyist/Tech-enthusiast"
  ]
}

export default function Home(props) {
  const [formValue, setFormValue] = useState({ subscribe: true })
  const [submitted, setSubmitted] = useState(false)
  const onChange = useCallback(nextValue => setFormValue(nextValue), [])

  // netlify forms fcns
  const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  const handleSubmit = async (e) => {
    e.preventDefault()
    let submission = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ ...formValue, "form-name": "Astraios Beta Signup"  })
    })
    if (submission) setSubmitted(true)
  }

  return (
    <Layout title={'Astraios'} description={content.descriptionLine1}>
      {/* HERO SECTION */}
      <Box round margin={{ vertical: 'large', horizontal: 'small' }} pad={{ bottom: "large" }} id={'home'}> 
        <Heading size={'large'} margin={{ bottom: "none" }} responsive>{content.heading}</Heading>
        <Box direction={'row'} align={'end'} wrap>
          <Box flex={'grow'} margin={{ vertical: "2rem", horizontal: "auto" }}>
            {content.description.map((line, key) =><Paragraph key={key} size={'large'} margin={'small'} responsive>{line}</Paragraph>)}
            <Box direction={'row-responsive'} gap={'small'} align={"center"} margin={{ top: "medium", bottom: "medium" }}>
              <Anchor href={content.callToAction.link}><Button primary size={"large"} label={content.callToAction.text}/></Anchor>
            </Box>
            <Box direction={'row-responsive'} wrap gap={'small'} align={"center"}>
              <Anchor label={content.callToAction2.text} href={content.callToAction2.link} size={"medium"} color={'#7D4CDB'}/>
              <Text size={"medium"}>{content.callToAction2.description}</Text>
            </Box>
          </Box>
          <Box margin={{ vertical: "2rem", horizontal: "auto" }} width={'20rem'} height={'20rem'}>
            <Image
              fit="contain"
              src="/astraios_checklist.png"
            />
          </Box>
        </Box>
      </Box>
      {/* BLOG SECTION */}
      {/* <Box round margin={{ vertical: 'large', horizontal: 'small' }} pad={{ top: "large", bottom: "large" }} id={'blog'}>
        <Heading size={'medium'} margin={'none'} responsive>{content.blog.heading}</Heading>
        <Paragraph size={'small'} responsive>{content.blog.description}</Paragraph>
        <Box direction={'column'} gap={'medium'} pad={"medium"} round background={'light-1'}>
          <Box direction={'row'} gap={'small'} align={"center"} justify={"center"}>
            <Box direction={"row-responsive"} gap={'small'} align={"center"} justify={"center"} style={{minWidth: '250px'}}>
              {content.blog.articles.map(({buttonTitle}, key) => 
                <Button primary size={"small"} label={buttonTitle} key={key} disabled={ index === key } onClick={() => setIndex(key)}/>
              )}
            </Box>
          </Box>
          <Box direction={"row-responsive"} gap={'medium'}>
            <Box align={"center"} justify={'center'}>
              <Image src={'/spaceship.png'} style={{borderRadius: '20px', maxWidth: '200px'}}/>
            </Box> 
            <Box flex={'grow'} direction={'column'} align={"center"}>
              <Heading level={'2'} margin={'none'}>{content.blog.articles[index].articleTitle}</Heading>
              <Paragraph size={'small'} responsive>{content.blog.articles[index].articleBody}</Paragraph>
              <Box>
                <Anchor label={'Read more'} size={'small'} color={'#7D4CDB'}/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}
      {/* FEATURES */}
      <Box direction={'column'} align={'center'} margin={{ vertical: 'large', horizontal: 'small' }} pad={{ top: "large", bottom: "large" }} id={'features'}>
        <Heading textAlign={'center'} size={'medium'} margin={'none'} responsive>{content.features.heading}</Heading>
        <Paragraph size={'small'} responsive>{content.features.description}</Paragraph>
        {content.features.features.map(({image, title, body, readMore, reverse}, key) => 
          <Feature image={image} title={title} body={body} key={key} readMore={readMore} reverse={reverse}/>
        )}
        <Box direction={'row-responsive'} responsive wrap gap={'small'} align={"center"} margin={'large'}>
          <Anchor href={content.callToAction.link}><Button primary size={"large"} label={content.callToAction.text}/></Anchor>
        </Box>
      </Box>
      {/* SIGNUP */}
      <Box direction={'column'} align={'center'} margin={{ vertical: 'large', horizontal: 'small' }} pad={{ top: "large", bottom: "large" }} id={'contact'}>
        <Heading textAlign={'center'} size={'medium'} margin={'none'} responsive>{content.contact.heading}</Heading>
        <Paragraph size={'small'} textAlign={'center'} responsive>{content.contact.description}</Paragraph>
        <Box align={"center"} margin={'large'} background={'light-1'} round pad={'large'}>
          <Form value={formValue} onChange={onChange} onSubmit={handleSubmit} name="Astraios Beta Signup" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            {/* <input type="hidden" name="form-name" value="Astraios Beta Signup" /> */}
            <FormField label="Name" name="name">
              <TextInput name="name" placeholder="John Doe" />
            </FormField>
            <FormField label="Email" name="email" required>
              <MaskedInput
                name="email"
                mask={[
                  { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                  { fixed: '@' },
                  { regexp: /^[\w]+$/, placeholder: 'mail' },
                  { fixed: '.' },
                  { regexp: /^[\w.]+$/, placeholder: 'com' },
                ]}
              />
            </FormField>
            <FormField label="Job" name="job">
              <Select
                name="job"
                options={formData.jobOptions}
                value={formValue.job}
                placeholder="Select..."
              />
            </FormField>
            <FormField name="subscribe">
              <CheckBox name="subscribe" label="Subscribe for email updates?" checked={formValue.subscribe} />
            </FormField>
            <Box direction="row" justify="center" margin={{ top: 'large' }}>
              <Button type="submit" disabled={submitted} label={submitted ? "Thanks 🎉" : "Submit"} primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Layout>
  )
}