import { useEffect, useState } from "react";
import "./App.css";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";


import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "./services/userService";

function App() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch users when the application loads
    const fetchUsers = async () => {
    try {
        setLoading(true);
        setError("");

        const response = await getUsers();
        setUsers(response.data.users);
    } catch (error) {
        console.error(error);
        setError("Failed to fetch users.");
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
    const loadUsers = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await getUsers();
            setUsers(response.data.users);
        } catch (error) {
            console.error(error);
            setError("Failed to fetch users.");
        } finally {
            setLoading(false);
        }
    };

    loadUsers();
}, []);
    // Add or update user
    const handleSubmit = async (userData) => {
        try {
            setError("");

            if (editingUser) {
                await updateUser(editingUser._id, userData);
                setEditingUser(null);
            } else {
                await createUser(userData);
            }

            await fetchUsers();
        } catch (error) {
            console.error(error);

            setError(
                error.response?.data?.message ||
                "Something went wrong."
            );
        }
    };

    // Edit user
    const handleEdit = (user) => {
        setEditingUser(user);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Delete user
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            setError("");

            await deleteUser(id);

            await fetchUsers();
        } catch (error) {
            console.error(error);
            setError("Failed to delete user.");
        }
    };

    // Cancel editing
    const handleCancel = () => {
        setEditingUser(null);
    };

    const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();

    return (
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.role.toLowerCase().includes(search) ||
        user.department.toLowerCase().includes(search)
    );
});

    return (
        <div className="app">
            <header className="app-header">
                <h1>User Management System</h1>
                <p>Manage users easily with MERN Stack</p>
            </header>

            <main className="container">
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <div className="search-box">
                  <input
                      type="text"
                      placeholder="Search users by name, email, role or department..."
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>

                <UserForm
                    key={editingUser?._id || "new"}
                    onSubmit={handleSubmit}
                    editingUser={editingUser}
                    onCancel={handleCancel}
                />

                {loading ? (
                    <p className="loading">Loading users...</p>
                ) : (
                    <UserList
                        users={filteredUsers}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
            </main>
        </div>
    );
}

export default App;