
---

## `useEffect` Hook

The `useEffect` hook in React allows you to perform side effects in functional components. Side effects are operations that can impact other parts of the application or interact with external systems, such as data fetching, subscriptions, or manual DOM manipulations.

### Usage

The `useEffect` hook is invoked when:

1. **The Component Re-Renders:** The effect runs every time the component re-renders.
2. **The Component Mounts:** The effect runs once when the component is first rendered.
3. **The Dependencies Change:** The effect runs when specific state or props values listed in the dependencies array change.

### Examples

**Run on Every Render:**

```jsx
useEffect(() => {
    console.log("Component re-rendered");
});
```
This effect runs after every re-render of the component.

**Run on Component Mount:**

```jsx
useEffect(() => {
    console.log("Component Mounted");
}, []);
```
This effect runs only once after the initial render (i.e., when the component mounts).

**Run When Dependencies Change:**

```jsx
useEffect(() => {
    console.log("Dependency changed");
}, [dependencies]);
```
This effect runs on component mount and whenever any value in the `dependencies` array changes.

### Common Use Cases

1. **Fetching Data:** To fetch data from an API or database when the component mounts.
2. **Cleanup:** To perform cleanup tasks (e.g., unsubscribing from services) when the component unmounts.
3. **Real-Time Updates:** To handle real-time updates or subscriptions in your components.

---

