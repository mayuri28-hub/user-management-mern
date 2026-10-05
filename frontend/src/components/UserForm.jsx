import { useState } from "react";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    status: "Active"
};

function UserForm({ onSubmit, editingUser, onCancel }) {
   
   const [formData, setFormData] = useState(() => {
    if (editingUser) {
        return {
            name: editingUser.name || "",
            email: editingUser.email || "",
            phone: editingUser.phone || "",
            role: editingUser.role || "",
            department: editingUser.department || "",
            status: editingUser.status || "Active"
        };
    }

    return initialForm;
});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(formData);

        if (!editingUser) {
            setFormData(initialForm);
        }
    };

    return (
        <div className="user-form">
            <h2>{editingUser ? "Edit User" : "Add User"}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                />

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>

                <button type="submit">
                    {editingUser ? "Update User" : "Add User"}
                </button>

                {editingUser && (
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
}

export default UserForm;