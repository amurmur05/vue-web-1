export const scrollToSection = (sectionId: string): void => {
  if (sectionId === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  document
    .getElementById(sectionId.replace(/^#/, ''))
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
