﻿using Microsoft.Extensions.Caching.Distributed;

namespace SharePointPnP.Modernization.Framework.Cache
{
    /// <summary>
    /// Interface to be implemented by each cache options implementation
    /// </summary>
    public interface ICacheOptions
    {
        /// <summary>
        /// Prefix value that will be prepended to the provided key value
        /// </summary>
        public string KeyPrefix { get; set; }

        /// <summary>
        /// Returns the key value to use by the caching system, typically this will mean prepending the KeyPrefix
        /// </summary>
        /// <param name="key">Provided key</param>
        /// <returns>Key to use by the caching system</returns>
        public string GetKey(string key);

        /// <summary>
        /// Default cache entry configuration, will be used to save items to the cache
        /// </summary>
        public DistributedCacheEntryOptions EntryOptions { get; set; }
    }
}
