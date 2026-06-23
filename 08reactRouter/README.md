## React Router 
- two Components
  - Link (when we use anchor tag pages refresh so why in the place of a tag we use Link)
  - NavLink
- while using NavLink we mostly using className css in callbacks and backticks 
``` javascript
 <NavLink
   className={({isActive}) =>
  `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?" ":""}
  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
   }
>
   Home
</NavLink>
```
- we have got an [isActive]() parmeter in callbacks function
-  The isActive property in React Router's NavLink allows you to conditionally apply styles or classes to highlight the link that matches the current route.


### [Outlet]('https://api.reactrouter.com/v8/functions/react-router.Outlet.html')
- Renders the matching child route of a parent route or nothing if no child route matches
 ### loader

 ### RouteProvider
 ### Outlet
 ### router
 ### USELOADER DATA
 
