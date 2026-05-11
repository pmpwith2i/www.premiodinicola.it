import Footer from '@/components/shadcn-studio/blocks/footer-component-01/footer-component-01'

const FooterPage = () => {
  return (
    <Footer
      sponsors={[
        { name: 'Confindustria Chieti Pescara', url: 'https://confindustriachpe.it/' },
        { name: './cogita ETS', url: 'https://www.cogita.it/' },
        { name: 'IIS Alessandrini di Teramo', url: 'https://www.iisteramo.edu.it/' },
      ]}
      contactEmail='vincenzo@live.com'
      copyrightYear={2025}
    />
  )
}

export default FooterPage
