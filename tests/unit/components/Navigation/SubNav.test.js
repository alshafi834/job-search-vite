import { render, screen } from '@testing-library/vue'
import SubNav from '@/components/Navigation/SubNav.vue'

describe('TheSubNav', () => {
  const renderSubNav = (routeName) => {
    render(SubNav, {
      global: {
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  describe('When user is on job page', () => {
    it('displays job count', () => {
      const routeName = 'JobResults'
      renderSubNav(routeName)

      const jobCount = screen.getByText('1653')
      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('When user is on not job page', () => {
    it('does not display the job count', () => {
      const routeName = 'Home'
      renderSubNav(routeName)
      const jobCount = screen.queryByText('1653')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
