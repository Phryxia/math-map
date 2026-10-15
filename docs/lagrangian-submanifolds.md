# Lagrangian 부분다양체

# 개요

Lagrangian 부분다양체는 심플렉틱 형식이 소멸하는 최대 차원의 부분다양체다. [심플렉틱 다양체](symplectic-manifolds.md) $(M,\omega)$ 의 차원이 $2n$ 이면 그런 부분다양체의 차원은 $n$ 이다.

심플렉틱 다양체 사이의 사상, 보존량의 공통 준위집합, 정준변환을 만드는 생성함수가 모두 Lagrangian 부분다양체 하나로 적힌다. Weinstein 근방 정리는 Lagrangian 의 근방을 [여접다발](cotangent-bundle.md)의 영단면 근방으로 고정한다.

# 직관

평면의 좌표 $(q,p)$ 를 다른 좌표 $(Q,P)$ 로 바꾸면서 $dQ\wedge dP=dq\wedge dp$ 를 지키려 한다. $Q=Q(q,p)$ 와 $P=P(q,p)$ 를 미지함수로 두면 조건은 Jacobi 행렬식이 $1$ 이라는 식 하나지만, 두 함수가 그 식에 함께 들어가므로 하나를 정해도 다른 하나가 편미분방정식으로 남는다.

함수 하나로 줄이는 방법이 있다. $S(q,Q)$ 를 아무 매끄러운 함수로 잡고

$$
p=\frac{\partial S}{\partial q},\qquad P=-\frac{\partial S}{\partial Q}
$$

로 $p$ 와 $P$ 를 정한다. 그러면 $p\thinspace dq-P\thinspace dQ=dS$ 이고, 양변에 외미분을 취하면 $dp\wedge dq-dP\wedge dQ=0$ 이므로 조건이 저절로 성립한다. 아무 $S$ 하나가 좌표 바꾸기 하나를 준다.

이 계산이 쓴 것은 네 변수 공간 $\lbrace(q,p,Q,P)\rbrace$ 에 2형식 $dq\wedge dp-dQ\wedge dP$ 를 주고, 바꾸기의 그래프 위에서 그 형식이 소멸한다는 것뿐이다. 그래프는 2차원이고 전체는 4차원이다.

소멸하는 부분다양체의 차원은 전체 차원의 절반을 넘지 못한다. 절반인 것을 Lagrangian 부분다양체라 하고, 좌표 바꾸기의 그래프가 그중 하나다.

# 정의

Lagrangian 부분다양체는 심플렉틱 형식이 소멸하는 절반 차원의 부분다양체다. $2n$ 차원 심플렉틱 다양체 $(M,\omega)$ 의 부분다양체 $L$ 과 포함사상 $\iota\colon L\to M$ 에 대해

$$
\iota^\ast\omega=0,\qquad \dim L=n
$$

이면 $L$ 을 **Lagrangian 부분다양체**라 한다.

접공간 수준의 이름을 함께 둔다. 심플렉틱 벡터공간 $(V,\omega)$ 의 부분공간 $W$ 가 $\omega(w,w')=0$ 을 모든 $w,w'\in W$ 에서 만족하면 **등방**(isotropic)이라 하고, 등방이면서 $\dim W=\tfrac12\dim V$ 이면 **Lagrangian** 이라 한다. $L$ 이 Lagrangian 부분다양체인 것은 각 점의 접공간이 Lagrangian 부분공간인 것과 같다.

$W$ 의 **심플렉틱 여공간** $W^\omega$ 는 $W$ 의 모든 벡터 $w$ 에 대해 $\omega(v,w)=0$ 인 벡터 $v$ 전체다. 등방은 $W\subset W^\omega$ 와, Lagrangian 은 $W=W^\omega$ 와 같다.

# 성질

## 차원 상한

**정리.** $\dim V=2n$ 인 심플렉틱 벡터공간의 등방 부분공간 $W$ 는 $\dim W\le n$ 이다.

비퇴화성으로 $v\mapsto\omega(v,\cdot)$ 가 $V$ 와 $V^\ast$ 의 동형이므로, 이것을 $W$ 로 제한하는 사상 $V\to W^\ast$ 는 전사이고 핵이 $W^\omega$ 다. 따라서 $\dim W^\omega=2n-\dim W$ 다. 등방이면 $W\subset W^\omega$ 이므로 $\dim W\le 2n-\dim W$ 다. ∎

## 1형식 그래프의 판정

**정리.** 다양체 $N$ 의 1형식 $\alpha$ 를 사상 $\alpha\colon N\to T^\ast N$ 으로 보면, 그 상 $\Gamma\_\alpha$ 가 Lagrangian 인 것은 $d\alpha=0$ 인 것과 같다.

여접다발의 표준 1형식 $\lambda$ 는 $\alpha^\ast\lambda=\alpha$ 를 만족한다. 표준 심플렉틱 형식이 $\omega=-d\lambda$ 이므로 $\alpha^\ast\omega=-d(\alpha^\ast\lambda)=-d\alpha$ 다. 차원은 $\dim N=n$ 으로 맞으므로 소멸 조건이 $d\alpha=0$ 이다. ∎

$\alpha=df$ 인 경우가 닫힌 1형식의 가장 흔한 예이고, 그 그래프가 직관 절의 생성함수에 대응한다. 영단면은 $\alpha=0$ 인 경우다.

## 심플렉틱 사상의 그래프

**정리.** 미분동형 $\varphi\colon(M\_1,\omega\_1)\to(M\_2,\omega\_2)$ 가 $\varphi^\ast\omega\_2=\omega\_1$ 을 만족하는 것은, 그래프 $\Gamma\_\varphi=\lbrace(x,\varphi(x))\rbrace$ 가 곱다양체 $M\_1\times M\_2$ 의 형식 $\omega\_1\oplus(-\omega\_2)$ 에 대해 Lagrangian 인 것과 같다.

사상 $\iota(x)=(x,\varphi(x))$ 의 당김은 $\iota^\ast\lbrack\omega\_1\oplus(-\omega\_2)\rbrack=\omega\_1-\varphi^\ast\omega\_2$ 다. 이것이 $0$ 인 것이 조건과 같고, 차원은 $\dim M\_1=\tfrac12\dim(M\_1\times M\_2)$ 로 맞는다. ∎

$\varphi$ 가 미분동형이 아닌 Lagrangian 부분다양체도 같은 자리에 놓이므로, 사상이 아닌 대응까지 한 틀에서 다룰 수 있다.

## Weinstein 근방 정리

**정리.** 콤팩트 Lagrangian 부분다양체 $L\subset(M,\omega)$ 에는 근방 $U$ 와 영단면의 근방 $V\subset T^\ast L$ 이 있어, $L$ 을 영단면으로 보내는 심플렉틱 미분동형 $U\to V$ 가 있다.[^1]

증명의 요지는 둘이다. 먼저 $L$ 의 심플렉틱 법다발이 $T^\ast L$ 과 동형임을 선형대수로 얻는다. $T\_xL$ 이 Lagrangian 이므로 $\omega$ 가 $T\_xM/T\_xL$ 과 $(T\_xL)^\ast$ 를 동형으로 잇는다. 그 다음 두 심플렉틱 형식이 $L$ 위에서 일치하는 상황에 Moser 논법을 적용해 근방을 맞춘다. ∎

따라서 Lagrangian 의 근방에는 국소 불변량이 없고, $L$ 의 미분위상만이 근방의 심플렉틱 구조를 정한다. Darboux 정리가 점 하나에 대해 말하는 것을 이 정리가 Lagrangian 전체에 대해 말한다.

# 활용

- [심플렉틱 다양체](symplectic-manifolds.md)의 Darboux 정리가 국소 표준형을 주는 자리에서, Lagrangian 은 그 표준형의 $\lbrace p=0\rbrace$ 으로 놓인다. Weinstein 근방 정리가 이 관찰을 콤팩트 Lagrangian 전체로 넓힌 것이다.
- [여접다발](cotangent-bundle.md)의 성질 절이 드는 정준변환을 생성함수로 만드는 방법이 심플렉틱 사상의 그래프 판정이다. 생성함수 $S$ 의 그래프가 Lagrangian 이고, 그 Lagrangian 이 사상의 그래프로 읽히면 정준변환이 된다.
- [적분가능계](integrable-systems.md)의 보존량 사상 $F$ 의 올이 Lagrangian 이다. Arnold–Liouville 정리의 작용 변수는 그 올 위의 사이클에서 표준 1형식을 적분한 값이고, 적분이 사이클의 호모토피류에만 의존하는 것이 올의 Lagrangian 성질에서 나온다.
- [모멘트 사상](moment-map.md)의 정의에서 환군 작용의 올이 Lagrangian 이다. 모멘트 사상의 상이 볼록 다면체가 되는 구조에서 다면체의 내부 점의 올이 그 예다.
- [Hamilton 역학](hamiltonian-mechanics.md)의 정준방정식을 좌표 바꾸기로 단순화할 때, 바꾸기를 직접 찾는 대신 생성함수 하나를 찾는다. [Hamilton–Jacobi 방정식](hamilton-jacobi-equation.md)이 그 생성함수를 정하는 방정식이다.

[^1]: Dusa McDuff, Dietmar Salamon, *Introduction to Symplectic Topology*, 3판, Oxford University Press, 2017, 3 장과 4 장. 등방 부분공간의 선형대수, Moser 논법, Weinstein 근방 정리가 여기 있다.

# 연관 문서

## 선수지식

- [심플렉틱 다양체](symplectic-manifolds.md)
- [여접다발](cotangent-bundle.md)

## 더 알아보기

- [Hamilton-Jacobi 방정식](hamilton-jacobi-equation.md)

#differential_geometry #topology #analysis
