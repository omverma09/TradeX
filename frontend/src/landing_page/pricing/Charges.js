import React from 'react'


export default function Charges() {
    return (
        <div class="container mt-5">
            <h2>Charges for account opening</h2>
            <div class="table-responsive">
                <table class="table table-bordered mt-5">
                    <thead class="table-light">
                        <tr>
                            <th>Type of account</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online account</td>
                            <td><span class="free-badge">FREE</span></td>
                        </tr>
                        <tr>
                            <td>Offline account</td>
                            <td><span class="free-badge">FREE</span></td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
