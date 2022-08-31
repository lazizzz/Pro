/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
// Logo Import
import Logo from "./Media/logo_size.jpg"
// Import Login
 import { useContext, useRef } from "react";
 import { useNavigate } from "react-router-dom";
 import { AuthContext } from "../../utilities/authContext";
 import { GameContext } from "../../utilities/gameContext";

const navigation = [
  { name: 'About', href: '/About', current: true },
  { name: 'Donate', href: '/Explore', current: false },
  { name: 'Add Idol', href: '/Hero', current: false },
  { name: 'Help', href: '/Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
     const { gameCart } = useContext(GameContext);
 const { currentUser, logout } = useContext(AuthContext);
   let navigate = useNavigate();
      const myRef = useRef(null);

  const onLogout = () => {
     logout();
   

     console.log(myRef.current.textContent);

     navigate("/login");
 };
     
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <Link to={"/"}>
                         <img
                    className="block h-8  lg:hidden w-32"
                    src={Logo}
                    alt="Workflow"
                  />

                  <img
                    className="hidden h-8 w-32 lg:block"
                    src={Logo}
                    alt="Workflow"
                  />
                    </Link>
                 
                  
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABO1BMVEUzcYD///8dHR70s4IUFBRKSlTio3nU1tiGtNHz+v8AAAA0dIMaGhoycIAma3tJSVMhaXnOh1fYk2Q/eYfy9vcAAAj7uIYcGBgWZXaqwMcTDgwcFRQfHyDZ291DQ0zwsoLf6OrG1tq1yM2btLuGpq9xmaNcjJhMgo/r8fKNq7TT3+J6nqefuL81NTssLDAwZ3TjrYLTp4LopXVpgYFWVmA7O0JQV1keNTsRAwAoUFoGDBC2h2NUe4AuXWklPUMfJyobLDBFNittUj7GkmuXcFOzm4GAiYGklYF0hYHGmnq5l3vpybU+YW6Rk5rIzdPs2MyYvNOfoKVtbnawsbWCgojBw8aur7NebHx4nLRsiJ1fZmhnf5Nca3s6QURyd3iUmpwrIx5WQjNnTjuFY0pBUlSQjYHcsJSpy+CEmKgMb78HAAATIklEQVR4nM2dCVfbSBLHZWPMRLJkz/gG29jGxoSEIyThcIJNzjnjCUNgZtlNApPsZr//J9hW6+rW2apqJft/896AcaT+uaqrqlvtbiWXuWr9wbC9MRpvTibVqqZo1epksjkebbSHg34t+9srGV6boG3c29RarUrFMAxd0RXzP+t/OnmlUmm1qpv3NrIFzYqwPxxtVk0ykylOukla3RwN+xm1JAvCfnusGZVENp6zYmjjdhaUsglrg5HWqhgp4DwZlZY2Gsj2WKmEW8Ox0YLRuZQtYzzcktkoeYS14VgBGs9vSmU8lGdJWYTbo4oUPAeyMtqW1DIphLX2pJUqsCRLN1qTthRDSiDs31UqUukcVZS7EoIrmrA/NuR5p1+GMUYzIgm3N2W7Jy/irJvIDoki3B63ssSzIVtjFCOCsD+WGD3jZFQwvgomrI2QuT0VY2sEjqtQwnaG8SWU0Wh/VcLtSTb5IU6VCaw7gghHlewDTFB6ZfSVCAdf2UE9GcbgKxDW7rW+EZ+p1r3UESct4aD6rQxoyagOsiXc+PoRxq/KRoaEW98ghAZVmaQaIachHCjf1kMdGcogG8L73yRHhEmv3M+CcPx/A2gijqUTbk2wHqrxQl7NEO6MgoR9VJIgQPre6clsdmRpNjs5Pd1TUJxGVXC8IUY4gA9zCcbeydG8sOpXoXQ2O92DQ+qCBY4Q4RBcxmjK6axwTHDCRDCPC7NTBQrZGsoibEMBifXmx+F0HuZxfrYHZGyJjKgECO8D07y2Nysk4Dm2PAIyimSNZMK7MAtqykmEc8pkbN3FE0IBT0vCfJaznmSEmER4H9gHZ6n4TB0fgeJ1K8lREwjboD6o6WepAYkZ5yDESkK4iSeEpQltLw8ABCMmJI1YwgEQUCyEhiAewfriAErYB1VqcEDSF2Hhxogr4GIIt6ogp9HnYMBCoQS7ZTWmDI8hBI4mjhCAhVWgEScQwjHMR2fHCMBCYQ65KUGMHi9GEgJrtT0cYGF1Jrt+iyIcwEb0GqYTWohHIEK9MkhHuKXAAE+wgATxDBZtlIhoE0EIjDJ7aD6KCLp3VLQJJwRO/MowYQGc+COmikMJBzBAXZHBVwAn/vCuGEZYq4IAZZmQaHUP1IBq2GObMMJ7wHk1rSQJENwV74kRwuptolNkLmQEHQ+H+GkIIXRmVEs/6o0RbPrSECEcged+8xIBoQVq8EF4gHAb/ADtFGPC6U3T9wqs5qgEljMECCfQ2W2Mk07V2+IN/xLQiHog7/sJYRMzVJC5GZvv5kmj4SOEjjIC0zY+whr8AYwO5nv2ZL2x1LiZ8q+vnsLaYdRiCeFhBpgr6urti6XG0tJS45mfEDiO8gcbnrAPX0kCKWim9cKnYsPkCyGEuqnS6scQwsb1FmHa2YtpvX77pGjhmYS3fsJjWOnmH+9zhPBMQQjTZUMSXT4Vl1y+MEJgNPVnDI4QYUJFS2FCYr7nL1g8k/B5gBDYEX1GZAm3Meu5dNFAM61Pb0nw5PkI4cu6n/AM/Oh0O4JwE7PYQjCUktzwshjAMwmf+AkLJSihvhlOiAikgqF0qga909UL1f/2VfAzfjacMoSYXihASGNnFJ5pxADhMZiQ7YkeYR/1tYKkqjTSOz3CQEKEE+rMkwyP8C5qSVAs4VSdRnunS/jJ3xHhhIpxN0hYw/DFJfxpnRaeCXyEMNAR4f2QqBYgRAwq4gin9ZsE73S17h8hFhCE3hDDJZygABUtdOyUEFx8RvTlfHg+NDXxE6KyfQQhqVwEzWe7Kd8RwTUNlZv1HULEsMkinAfcs/lyXRyPio+m4LqUyh1E2YQ17OJRH+G0/uxJCvPZRuQLN+jYwpJeqXGEQ+wCbu2MbRyJnsLdj9E69ynlcS2qDDlCVD1jEXr9cFp/CeHzGRHXDb26xiLcQvJx2aJ+WwTxmWI64vEpdh3xFkOIdlKGsP43FI83ItJJXTdV5DipV7VNb+CAbNbHRVJTtptSQsQcokeoTqmL1T+BXdQz4nQ6BT5g4xBrLiH4aZN3Mf3zs1uazqZFjA2XivQaN7fP3mvoj916EqXISPeK8fpBg+h2Wpg+w5jQGkNNb82LPXiNbtXIJUR7/I8Nx8VwTmpf46V1uR/RKcwhRE1fEOlP7UndJ6R1T5CET1zCpcZDZKFFJzMU/MBJMV7ZLSIjPPUFCpB0RNX9lBqvkEakQyhFQq4w9r3WqUjApUbd+5T2sQ0b24TYbqis2y1aV6c3OCeloUZ1wvG6hh0PWISwhbKe9KpLOCVhEEv497TuXu8pktCckFLwJZv+1GnR0k39bzTh83rJvR6W0CzcFHw29Gy4dFt/jib8VH/m/oK24YgSoibzTWkOYeO5ikyHZkJUXU9fh63D9mRO7yvgNV6eDJfwk/pSAqH7Ka2jY2C1Rgj76JFTZd9rnVTCfXzT+oQQuBCRkfFLw20dsqQxixrvU3qALr4rA0K4gb6MXZYSFeGjew+x+ML5CVvTkKZtEELoSkTmMv/Gc4Wy/hvftHuEEB1K3cpbOiG28qbBVMHXbOSTyohQwgYAWk6pSdiMxXiQCSG28DbVqinYwSElfJWFERu/yCDsK/hkQbz9dSaE+EBjpgsFP1VqVqYZAC41sFUpJRwqbSlbjmbRER/I2GnEaCv4hK9kkxHxE1G0ZRsKeibRFDOAkicZTkrGT8pYyq4z8qOplEhKPvuxsinjOoqu7MtFbKDnaGxtKuCV67z0p/uNRkOOr66TK+1L8VFzZbuCXIPhXUp/+PqhFF9tvCJX0mVt2TRR0CN8V7puSCnBG08NaXxklK9gp0I4ScmL+HEvI70K3uAn/HoSyrfGa6l7iknlU5gJfrhkjCg4yWU00EZsoB8b8tLk9kMJRpRsQtIP5cVS64pII0ruhWYslZUPHRkPUCsVpAZSUxNZNY0r/WFU6w8ODgI/BYSffPI1ZyKpLmUUXoQf/GCJwDk/hZkQP0Pq16aksQUrPVidOlS8goTr8hszljM+5C/60G/Eg++/DwH8/vuACWX7KB0fShnj+676YwhiiPx+KmdU72vLhpx5Gp/0YDz9IcAXcNKGlIkZn4y2lLk2v/RqMO/7zRgMNPuSiw+qylDKfGlAoU8yDn5wDBkaSKVMHgZUGUiZ8w7K+CmIQCkPInPhT5lsNN3qS3luESLjp3SlTSMbQPO5RU5yYerIiKxtQvUwo63Cq1KeH4YrFWJWgPT5If4ZcISMh4LfKGmsZwVoPQPOIOXb0qtC44zGgyzShCX6HD+TdGFJF5kKJ9V2dpu907UY+PU0MTJeJ00Sr0ueteBF19Pg10TFyXiVQCh/vMSKronKLJhS6a8P4hbvFw9kz1rwd9+UsjYx/h4Pi0RRfETyB0yM7LWJWdTervSnRapgd1y3/pBJNerIXl+KXSMcL6No64CFXD9wXs725n1J67xjb/Jz0dO6JeaVnzMl1CSt1Y+V8UsxTnKe9Ebdeyzp+xbxd/mGhO73LbIZItoyXsUSZpoO3e/MZNoRjR9jCTOYfPKkyfvuWoy+oQ2Z767hv38Yc5tv1w+Z7x9K+A5puHRDqf4cS/izpmQ2tGC+Q5pVvjA2+9vdWMBisdvtb2Z0d+Z7wBkVbpXxHaJfD2L4Dn413zLO5vbsd7nx38cPUWuUM5t/p/ZrJOCvNfqO3CiTQMB+Hz8LN63ctwAtxqAhDxw+ExF6HlGM+D0VMnBTY+gCUsZ9nvFg//ca8/fcUPpH7NsXA723iV+/ld+whES/M3Y8KP7O/zH3pvyb3Ab49zaRlfStU/H2flsulx8vfIh3frftSOzn+0tu8bhcXv5NV6zT5uQsLM3xhNg9hrwD8o7mnd4yUXn5TkAmY5CPiLybqLc7n52cnO7p+NMDg3sMofaJMs/Ho2xra81mqbSzTNXz+yll/E8IX+5Nz/onO6VSs7nWnB/NTrCYgX2iwEMoevrfbJ5vEra8pV2rueVewE9zW1+++3In8OqiV7b+ya59BROzM6eHB0J3+Azu9QXZr43cfu/kjLTGYbPUWbYRH/lQCJ+pL1u+1x/ZgMsd7jrNtbXS0Yl5EiSgbcH92lLvuUdt1/HTUTkN5v20b/FRxn6Yjy6Xg5cqNdfmgIMgw/bcS7dvool3VloLoTNb5bR4+fHCAxl8x2rg/WHx2Hl7L/x6zbU8MaWWYuF3+L6J4nUN+UBP5s0w49mEbpM9P+2urHCEKyvdgI8uP46+ZLN5diK+jjJ870vRyQzz4M21ZlRTaHN2ll2rWH7aXyEaMoBD84U+76NmKI276lrTPNFTyJAR+5cKTe+b5otwTq8tu26baTylfERvXcC39it9Jo6aoTThws0105DJrYzag1Yg62v6SSfWfJY8QuKn3RVHC5dw4b7W9XzUSxZxhpwLOGvkPsJJPZHYrynA56UL2rcuPEQnmH5xX1m5eMy8t5N8aWLIfBJj9F7QCft5a6fzNZEmEEKva5Ge6BE6wcZ7ofuGfasQYT6/No/fyi1mP+84I2rKTJCPTRe8m9rBZsEQsk4akSzCGGd6NGPcnuwx4ZQYUMhBLULW9R4zQDTYvGV+X3DvFCbMN+fRZ8/G7qsfOYjSToUNmOfSBbHMeTeSsHvOWDs+Wfi1FuWp8WcjRM0raidpANl0Qdz0D39HZAj/YJw0MVn4ECM25Us43yJ8iJESkEsXZOS3iCRcLHOE6W4SbsWkM0rCz5nZE++Cljpsw3tevljwkaZ7wTppWTCUumqGbDyYfM5MWMbQ5qnch6jEEb5zCYdeyUYJ33GEqe8yDxpR4KygYLBJF2Wse3Mtf+R6ZZsStt3fH3GfRFrCED8VOe8peGaXdpT61ly6WO5dOkRf+JLmkv0g0iQL5zaBYwSFzuwKPInaS9s/fOmCKWvecnU3V9CkTBaWOr6eKHjumn+1Ynon5dMFky/4qo3PFSmTBdUaf2KS6Nl5vnVg2knaSJrna29ixEUo4YIzoVjdzavJ50Th8w99yxXTd0MiCrazazH0rrpMsnAIu1f2X3d36A+Au5S4g2fFz7DkzyHVAXcmoWanUyo5Aaf3B0+4sJ2054SYUqmzkz7QmGKyd5pzSNmzZAG5giKWmHhTLrPp0E2IZacbmjGmBAJk8kW6s2SZ84BB3dCC9MJN74JJFk66YAoaQJCx5HXEtOcBe2c6a2fQuzPRxs4XzkTN20CuAEQZqpJzQkTqM529c7k1qAnZ2tQuazhCrqBJXZM6atqE6c/ldsf7e6Bu6C/cypdMsrCC6WUZV7JZWrNyPuRsdTvaAANNoKwxh8ELlpAf/EIKGouQhpqoKJNAuGV+SUCbgQMNZ8Q/ur7ZRL6ggZow3zRPUNCrEVEmgZAurYUHGn4YXF6wk94kXSzKiMGvJxpqjH4MRRwhrcGhIcA3wDDLGu/ZU9staCzBsj1VJ7zeFiTMDVuph/fszdmZQjIM9mb1v/CDX3AkzZsD/dYwliGeMNdOO0PDih1hlJe73HOLLjtDA074eXNCyj8xk44w91GF35wLNo8vOcJLxoXBYcaU+jGBIIkw9wGDyJU17APEFRkFDQX8kASQSIhCZJIiKWtYQqaggaZCMUABwtw7jBVdkHK5zRC2vVwR8vBeHPBdcvMFCDF9kR1f/Jch/K+EcYVAHxQlzJ2r4FZ4wab8J0P4p2tCeJgpqecijRcizF3CEd1gU15mCL1cAQ4zJfVSqO1ihLlFoQBtiBtsen+5gH+5lgWHmUJhIdZ0QcJcd74KRXRoev90Cf/pvgYFXJ13BVsuSpirHULjjRNsyo9cQjdXQCtu9TBs4hBHmMu9AXZGtwJ33dR1UmDFXVLfiDc7BWHuog7rjE4F3vuHTfgPmxBYcRfqFylanYYw130P8lQn2JT/ZRP+q4wJM+p70S6YntCsbyCNcoJNzyZ0fgVdS6SOQRDmLvNTQLM6XEd0uiHER6d5sSwIJ8xtXQM81Q42dlljFzSQMKNex8zISCIkAUdNnxqtYGPnCytXAMLMqpomxMAJc7VrNW1QtStw6qa2k6auuAvqtXASRBKS3riT1lWtYEPLGqugSR1m1J20PRBDmKt9TOuqHTdfWLkipY+uqh8hBoQT0oiTylWtpFgmhOX0qbAAiDBowlxu5TAdY88qa2hB00vHd7gCbyaCkHTHNIw02BA3pU6aIswQPlgHlEFIGN+LM5pJsVz+zpyhEU+FBfU9ig9NSH11VbC9HRpNe+JhprSK8k9JhITxw1SsWqXBpiwcZkrq9AOaTwohiasfd4Sc1UyKZcFUWFB3PoLjJysphESLa1UAcpcSJg/sC6p6LTgNkyhZhMSQV4fTJEgSbMqJYaagTg+vpJiPSh4hUf/8UFVjR1ekAo+vuKeqenge98AztaQSEm1dfKgTf40yEwk2kWGmRHyz/uFCnvUsySY0tXL+uUMoQzFLoT5aKhC6zudzCaEzoCwITa1cXR+WiMsGMAO/F4hjlg6vr7KgM5UVoal+9+rd9XsCoFJUlq1EwczX31+/u+pK7Xg+ZUloqVZbubg6f3P9eWd3Pu908p3OfL678/n6zfnVxUoNOCRKof8Bf6O5eIsbgwkAAAAASUVORK5CYII="
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          
                          <a
                           
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
