﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Contracts.Contracts.Base;
using Services.Infrastructure.Utils;

namespace Services.Infrastructure.Repositories.Interferes
{
    public interface IRepository<TModelDto> where TModelDto : DtoBase
    {
        public Task<OperationResult<List<TModelDto>>> GetAll();
        
        public Task<OperationResult<TModelDto>> Get(int modelId);
        
        public Task<OperationResult<TModelDto>> Create(TModelDto model);
        
        public Task<OperationResult<TModelDto>> Update(TModelDto model);
        
        public Task<OperationResult<bool>> Delete(int modelId);
    }
}