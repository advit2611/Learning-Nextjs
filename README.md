# Learning-Next

- Started learning pages and layouts

    - It is initialized by creating two files in app `page.tsx` and `layout.tsx`
    - `page.tsx` has the following component 
    - `layout.tsx` has the following interface
    - `props.children` is dynamic and is dependent on the path in the tree structure for rendering
    ```javascript
    const DashBoard: NextPage = () => {
    return (
        <div>
        <h1 className="text-4xl">I am in Profile</h1>
        </div>
    );
    };
    ```
    ```javascript
    interface DashBoardLayoutProps {
    children: React.ReactNode;
    }

    ```

- Understood tailwind.css and its working
    - created styling like 
    ```html
    <div className='text-4xl'>
    ```

- Learnt how to API fetch and caching with Next.js
- Learnt about Memoization with `useMemo()` hook

