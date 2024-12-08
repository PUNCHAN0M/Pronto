import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  const [agreement, setAgreement] = useState(false);
  const [condition, setCondition] = useState("none");

  const handleClickBtn = () => {
    // setCondition("condition);
    setCondition("show");
    console.log(`click ENTER bth agreeement : ${agreement}`);
  };

  const handleAgreement = (event) => {
    const isChecked = event.target.checked;
    setAgreement(isChecked);
    console.log(`agreement: ${isChecked}`);
  };

  const handleRouteCamera = () => {
    agreement ? navigate("/camera") : null;
  };

  return (
    <div className="background-container">
      {condition === "none" ? (
        <div className="first-container">
          <div className="logo-container">
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="svg-logo"
            >
              <image
                id="image0_46_31"
                className=""
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdIAAAHLCAYAAAB8uRllAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA/zSURBVHhe7dx77F91fcfxz49SdEBLy7UMmIXNueG2shkGXgrYcdtmxkVkYYB0LmORBDRFWJatYnGSTaVCzCIMNVwEQmiNOJIJCKOgEwUiKBolRnAUoXIp5X7/refHpzCTZez7fZ3v73fO7/d4JD/O+3P65zmc5/ec72VsbOGS8QIADGWzugUAhiCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAIGxsYVLxuvMCOyz12+XI/94cdnzN95Utpm7dZk3d6uyzZyt678CDOaxx5989e/7P7qnrP73NeW7P/hJ/VemgpCOwO67LSgfOPpPynFHHFjetMtOdS/AaPzkZ/eXS1ZfVy5c9bVy3wMP1b1MFiFt0bbz5pS//eAx5aTjDitbbfnGuhdgcjyy/vHymS9cWf7l4qvKhieeqnsZNSFtyTve9tZy1QX/WLabP7fuAZga9z/4cDn8xOXl9u/fXfcwSj5s1IJjD/+jcsPlK0UU6IRdFmxf1lxxTjny0MV1D6M0a2ze7h+rMwMaGxsrnzjtr8rK5SeVWbO8JgG6Y/bszcv7/nT/8txzz5dv3nZX3csouPoH3vm2t5aPnHh0XQF0S/Nif/kp7y9/8DtvrnsYBSEd0m4771BWn7+izN5887oHoHu2/JU3lC+ff2bZcbt5dQ9tE9Ih/es/nVp22NaJCXTfr/3qjuXcj51cV7RNSIdw6P57l0P227uuALrvz99zwMS3C2ifkA6o+VDRp//+g3UF0B/NhyNpn5AO6KB3va3s+eY31RVAf+y/z6Ky7+/vWVe0RUgHdNjB76oTQP8cdvA760RbhHRAhx30jjoB9M/hQto6IR1A8/u5C3bYtq4A+ucte+xWNp81q65og5AO4I1v2KJOAP21xRa+/94mIR3AFrNn1wmgv1zL2iWkA9hitldxQP/5RbZ2CekA/DA9MB1sttlYnWiDMgBAQEgBICCkABAQUgAICCkABIR0ACccdUidAPrruCMOrBNtEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAIjI0tXDJeZ17HimVLy/KTj68rhvXU08++sn3m2Vdn+L9steUbJ7Y7bjdvYkvmtLPOK2dfcGVdkRLSAQjpcO5d+2C5aPW15WcbtxeuuqbuheEs3HVBOWDfRWW/fRaVpUcdUvcyCCFtl0e7jEwT0BXnXlz2WHxsWXHORSJKK5rzqjmXPnDaJ185tzaeY80+mCpCykj8z4DCqEy8WNt4ji055tSJcw6mgpDSqubCtuSYZQLKpNoU1ObFm7tTJpuQ0pobb7lz4kLWbGEqvPJC7lQxZVIJKa3YdCcKU01MmWxCSiuaD35AV2yKKUwGISXW3Il6nEvXNDH1Ao/JIKREmq8hiChd5fxkMggpkTN95YCOc1fKqAkpQ2te7ftAB13XnKPuShklIWVoF6/2S0X0w5nn+l4zoyOkDM2rfPri3rXr6gTtE1KGcsXVN9YJuq95vPudO39UV9AuIWUo37r9rjpBPwgpoyKkwIxw/4MP1wnaJaQM5T9v/0GdoB/uf+ChOkG7hBSYEe5f546U0RBSAAiMjS1cMl5nXseKZUvL8pOPr6uZ7Q//7IPltu/fXVdTZ/fdFpT528yZmOfN3XpiSzc89viTZf2GJzZun5rYTrV3v32vcv1lZ9fVzHbaWeeVsy+4sq5ICekAhPQ1UxnSpUcdUvbbZ1E5YN9FZeGuC+peuqz5zvGaW+4oa75958R3OqfiF7GE9DVC2i6PdumNJqA/vfnS8sVPnT4xi2h/NC96zvjwCeWGy1dOHL9mDdOFkNJ5zUV30wVYPPtv0/Fs/hxPpgMhpdM2XXTdwUw/zTFtnjA4tvSdkNJZZ3zo/RMRZXprjnFzrKGvhJROat4Dbd5TY2ZojrWY0ldCSuc0j/qa90OZWZqYes+UPhJSOqW5kHqcO3PdcPnZYkrvCCmdcsJ7D64TM1ETUecAfSOkdEZzEfW+KB7x0jdCSmd81IdNqNyV0idCSmc0n9SFhrtS+kRI6QRfygf6SkjphP33EVJ+mce79IWQ0gn777tXneAVzgn6QkjpBI92gb4SUqCTvLiiL4SUKTdrltMQ6C9XMAAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFKAGWZ8fLxOtEFIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICClDWbvu4TK+cdvG38vjzX8B+klIGcojj24oYxu3bfyNvyykQH8JKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAp1079oH6wTdJqR0gosm0FdCCnTSvWvX1Qm6TUjphBtvubNO8Io1t9xRJ+g2IaUTbvq2kPLL1jgn6AkhpRMuXHWN90l5VXMueEpBXwgpneHCySYXbXxhBX0hpHTGxatdPHnFRauvrRN0n5DSGc0dafOIl5ltxTkXecxPrwgpnXLmuRe7iM5gzbFfsfEcgD4RUjqluZB6f2zm+sBpn6wT9IeQ0jnNHUnzeI+ZpTnmPnBGHwkpndTE1PulM0cTUY906SshpbOax3w+eDL9LTlmmYjSa0JKpzUX2CaoYjr9NMe0iajHufSdkNJ5zYV2j8XHCuo00RzD5lg2x1REmQ6ElN5o3jNtLr6b7mJEtV+a47cpoN7/ZjoZG1u4ZLzOvI4Vy5aW5ScfX1cz2xvefHB54cWX6mrq/Obuu5bt5s8t282bO7FuZrrh7nvWvrp9ZP3jE/NUevfb9yrXX3Z2Xc1sH/nE58rKz6+qK1JCOgAhfU1XQgr/X0L6GiFtl0e7ABAQUoay2WZOHfpll522rxO0y9UQmBF22XmHOkG7hJShzJrl1AFouBoylNmbb14n6Ie9f+8tdYJ2CSlDmT1bSOmXIw9dXCdol5AylFk+bESPLD3qkDpB+1wNgWlvv30W1QnaJ6TAtHbAvovckTJSQgpMax/90Al1gtEQUmDaau5Gmz8YJSEFpqWFuy4oN1y+sq5gdIQUmJa++KnT6wSjJaTAtLLpTtQjXSaLkALTRhPRn958qYgyqYQUmBbO+PAJExGFySakQK9tCugZH3p/3QOTS0iB3mke4TYBffme6ycC2qxhqoyNLVwyXmdex4plS8vyk4+vq5lt572PKuseXl9Xme3mzy03X3luXcH/bs5WW5a5c7ac2JL5yCc+V1Z+flVdkRLSAQjpa9oM6U7bzy8P3Op/apgsQtouj3YBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEdAAXrbqmTgD9delXrq8TbRBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIR0AC+99HKdAPrr5ZfH60QbhHQAz7/wYp0A+uuFF13L2iSkA3j+hRfqBNBfrmXtEtIBPPvc83UC6K/nn3dH2iYhHcBTTz9bHvjFI3UF0D8//ul95cWXXqor2iCkA/rq179VJ4D++cq136wTbRHSAV117TfqBNA/V/zbf9SJtgjpgK77xu3lrrvvqSuA/rjluz8sd/zwJ3VFW4R0QM13SU8/6/y6AuiPZR//XJ1ok5AO4Wtrbi3X3HRrXQF03xVX3zhxR0r7hHRIf/N3K8svHnmsrgC6674HHiqnnPHZuqJtQjqk//r5L8rRJ63wU1tApz3z7HPl8L/+h/LQo174j4qQBm76zvfKaWedV1cA3dM8PfvuD3zAaJSENPSZL6wqS0/9Z7/DC3TK0888V4448aPlS1/5et3DqAhpCy7+8rXlwL84tTy8fkPdAzB1fr7ukbL4faeUq67z4wuTQUhb8o3b7iq/teSE8snzryhPPv1M3QsweTY88VT5+GcvKW896C89zp1EY2MLl/i0TMu2nTennHTcYeXEY99Tdl2wQ907vey891Fl3cPr6yqz0/bzywO3rqorYFD3rn2wnPelr5bzL7t6IqZMLiEdscV7/245/r0Hl732/PUyf+6cicjO32ZO/df+ElKYGo8+9kR5dMPjZf2GJ8tt3/txueTL1/l+6BQTUgAIeI8UAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAAytlP8GJHc771pbM7wAAAAASUVORK5CYII="
              />
            </svg>
            <div className="title-name">Pronto</div>
          </div>
          <button
            className="enter-btn"
            onClick={() => {
              handleClickBtn();
            }}
          >
            Enter
          </button>
        </div>
      ) : condition === "show" ? (
        <div className="first-container-condition">
          <div className="container-condition">
            <div className="svg-logo-scale-down">
              <svg
                viewBox="0 0 405 374"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="svg-logo-condition"
              >
                <image
                  id="image0_46_31"
                  xlinkHref="data:image/png;base64,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aWedV1cA3dM8PfvuD3zAaJSENPSZL6wqS0/9Z7/DC3TK0888V4448aPlS1/5et3DqAhpCy7+8rXlwL84tTy8fkPdAzB1fr7ukbL4faeUq67z4wuTQUhb8o3b7iq/teSE8snzryhPPv1M3QsweTY88VT5+GcvKW896C89zp1EY2MLl/i0TMu2nTennHTcYeXEY99Tdl2wQ907vey891Fl3cPr6yqz0/bzywO3rqorYFD3rn2wnPelr5bzL7t6IqZMLiEdscV7/245/r0Hl732/PUyf+6cicjO32ZO/df+ElKYGo8+9kR5dMPjZf2GJ8tt3/txueTL1/l+6BQTUgAIeI8UAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAAytlP8GJHc771pbM7wAAAAASUVORK5CYII="
                />
              </svg>
              <div className="title-name">Pronto</div>
            </div>
          </div>
          <div className="motion-slide-up container-condition-down">
            <div className="title-condition motion-slide-up">
              <p>Camera Access Request</p>
              <div>
                <p>
                  Our app requires access to your camera in order to offer the
                  following features:
                </p>
                <ul>
                  <li>
                    <strong>[Describe specific feature]</strong> (e.g., taking
                    profile pictures, scanning documents, making video calls)
                  </li>
                  <li>
                    <strong>[Another feature]</strong> (e.g., scanning barcodes,
                    capturing media)
                  </li>
                </ul>
                <p>
                  Please grant camera access to fully utilize these functions.
                </p>
                <ul>
                  <li>
                    <strong>Permissions:</strong> This access allows the app to
                    use your camera.
                  </li>
                  <li>
                    Your camera feed will only be used for the specified
                    features and will never be accessed without your permission.
                  </li>
                </ul>
                <p>
                  <strong>Privacy:</strong>
                </p>
                <ul>
                  <li>
                    We value your privacy and will not share any images or
                    recordings without your consent.
                  </li>
                  <li>
                    You can revoke access at any time through your device’s
                    settings.
                  </li>
                </ul>
              </div>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                id="agreement"
                className="checkbox-item"
                checked={agreement}
                onChange={handleAgreement}
                />
              <label htmlFor="agreement" className="checkbox-item">
                Agreement
              </label>
            </div>
            <button
              className="enter-btn"
              onClick={() => {
                handleRouteCamera();
              }}
            >
              Enter
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
