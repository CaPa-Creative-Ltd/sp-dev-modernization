﻿using Newtonsoft.Json;
using SharePointPnP.Modernization.Framework.Extensions;
using System;
using System.Collections.Generic;

namespace SharePointPnP.Modernization.Framework.Entities
{
    /// <summary>
    /// Entity to describe a web part on a wiki or webpart page
    /// </summary>
    public class WebPartEntity
    {
        /// <summary>
        /// Default constructor
        /// </summary>
        public WebPartEntity()
        {
            this.Properties = new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase);
        }

        /// <summary>
        /// Web part type
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// Web part id
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// Web part server control id
        /// </summary>
        public string ServerControlId { get; set; }

        /// <summary>
        /// Web part zone id
        /// </summary>
        public string ZoneId { get; set; }

        /// <summary>
        /// Is this a visible web part or not
        /// </summary>
        public bool Hidden { get; set; }

        /// <summary>
        /// Is this web part closed or not
        /// </summary>
        public bool IsClosed { get; set; }

        /// <summary>
        /// Title of the web part
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Web part position: row
        /// </summary>
        public int Row { get; set; }

        /// <summary>
        /// Web part position: column
        /// </summary>
        public int Column { get; set; }

        /// <summary>
        ///  Web part position: order
        /// </summary>
        public int Order { get; set; }

        /// <summary>
        /// Web part position: zone index
        /// </summary>
        public uint ZoneIndex { get; set; }

        /// <summary>
        /// Dictionary with web part properties
        /// </summary>
        public Dictionary<string, string> Properties { get; set; }

        /// <summary>
        /// Returns the shortened web part type name
        /// </summary>
        /// <returns>Shortened web part type name</returns>
        public string TypeShort()
        {
            return Type.GetTypeShort();
        }

        /// <summary>
        /// Returns this instance as Json
        /// </summary>
        /// <returns>Json serialized string of this web part instance</returns>
        public string Json()
        {
            return JsonConvert.SerializeObject(this);
        }

        /// <summary>
        /// Used to identify groups of web parts e.g. multiple parts within a HTML field.
        /// </summary>
        public string SourceGroupName { get; set; }
    }
}
