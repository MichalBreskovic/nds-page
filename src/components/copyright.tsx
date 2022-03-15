import React from 'react';
import {useNavigate} from "react-router-dom";

function Copyright() {

    const navigate = useNavigate()

    return (
        <div className={"conditions"}>
            <p><strong>Copyright Policy</strong></p>
            <p>ViaRest (&quot;<strong>ViaRest</strong>&quot;) respects the intellectual property rights of others and requests the users of its services to do the same. If you believe that certain content, which appears on ViaRest real-time road maps (the &quot;<strong>Service</strong>&quot;), infringes upon copyrights that you own or represent, you may send ViaRest&#39;s designated copyright agent (&quot;<strong>Copyright Agent</strong>&quot;) a written notification, stating the location of the copyrighted work claimed to be infringed, in accordance with the provisions of the Digital Millennium Copyright Act (&quot;<strong>DMCA</strong>&quot;).</p>
            <p>Upon your notification, ViaRest may remove or disable access to any such content.</p>
            <p>To be effective, your notification of claimed infringement must be a written communication provided to the Copyright Agent that includes substantially the following:</p>
            <ol>
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; </li>
                <li>Identification of the copyrighted work claimed to be infringed via using the Website, or if multiple copyrighted works are covered by a single notification, a representative list of such works; </li>
                <li>Identification of the material that is claimed to infringe or to be the subject of infringing activity and that access to which is to be disabled, and information reasonably sufficient to permit ViaRest to locate the material, including the exact URI (Uniform resource Identifier) or coordinates on the Service&#39;s maps in which you discovered the copyrighted work claimed to be infringed; </li>
                <li>Information reasonably sufficient to permit ViaRest to contact you, such as an address, telephone number, and, if available, an electronic mail address at which you may be contacted; </li>
                <li>A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; </li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. </li>
            </ol>
            <p>Following receipt of your communication, ViaRest may ask you to provide further or supplemental information, prior to removing any content which was displayed on the Website, as ViaRest deems necessary to comply with the provisions of the DMCA. ViaRest may also provide the registered user who uploaded the allegedly infringing content with your contact details, in order for that person to be able to contact you directly and communicate with you regarding your notification.</p>
            <p><strong>Counter notification</strong></p>
            <p>You may submit a counter notification to the Copyright Agent. To be effective, your counter notification must be a written communication provided to the Copyright Agent that includes substantially the following:</p>
            <ol>
                <li>Your physical or electronic signature;</li>
                <li>Identification of the material to which access has been disabled and the location at which the material appeared before access to it was disabled. </li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was disabled as a result of mistake or misidentification of the material to be disabled;</li>
                <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside of the United States, for any judicial district in which you may be found, and that you will accept service of process from the person who provided notification or an agent of such person.</li>
            </ol>
            <p>After receipt of a counter notification, ViaRest will promptly provide the person who submitted the claimed copyright infringement notification with a copy of the counter notification, and will inform that person that ViaRest will replace the removed material, or cease disabling access to that material 10 business days.</p>
            <p>ViaRest will then replace the removed the material and cease disabling access to it between 10 to 14 business days following receipt of the counter notice, unless the Copyright Agent first receives notice from the person who notified ViaRest of the claimed copyright infringement that such person has filed an action seeking a court order to restrain the registered user from engaging in infringing activity relating to the material on ViaRest&#39;s system or network.</p>
            <p><strong>Repeat infringements</strong></p>
            <p>ViaRest may deny or cancel any individual use of the Website, or terminate your user account, if ViaRest determines in its sole discretion that you are a repeat infringer. A repeat infringer is a user who has been notified of infringing activity more than once or a user that his or her uploaded material was removed from the Website more than once. ViaRest may decide, at its sole discretion that a sufficient reason exists for the immediate termination of your account for any reason, at any time. In these cases ViaRest may terminate your account immediately. ViaRest may notify you that it canceled your account by sending a message to the e-mail address that you provided during the registration process. Such notification will come into effect immediately.</p>
            <p>Please note that the Copyright Agent receives DMCA notifications only. Any other matters, such as comments, requests and other messages should be referred to: dldoprava@gmail.com</p>

            <button className={"button"} onClick={() => navigate("/")}>Naspäť</button>
        </div>
    );
}

export default Copyright;
