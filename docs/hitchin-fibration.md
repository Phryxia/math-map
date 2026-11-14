# Hitchin 올뭉치

# 개요

**Hitchin 올뭉치(Hitchin fibration)** 는 곡선 위의 벡터다발에 곡선의 점마다 [행렬](matrices.md) 하나를 붙인 대상을, 그 행렬들의 [고윳값](eigenvalues.md)으로 분류하는 사상이다. 곡선의 각 점에서 $2\times 2$ 행렬의 고윳값 두 개를 찍으면, 원래 곡선을 두 겹으로 덮는 새 곡선이 그려진다. 고윳값을 고정하면 남는 자유도가 그 새 곡선 위의 직선다발이므로, 다루기 어려운 [모듈라이 공간](moduli-space.md)이 [Jacobi 다양체](jacobian-variety.md)들의 족으로 풀린다.

# 직관

행렬 하나 $A$ 를 켤레를 빼고 분류하면, 고윳값이 서로 다를 때 특성다항식 $\lambda^2-(\mathrm{tr}\thinspace A)\lambda+\det A$ 가 $A$ 를 정한다. 이제 종수 $g$ 인 곡선 $C$ 위의 점 $x$ 마다 $2\times 2$ 행렬 $\phi(x)$ 가 정칙으로 붙어 있다고 하자. 점마다 특성다항식의 근 두 개를 찍으면, $C$ 의 점 하나 위에 점 두 개가 놓인 곡선 $\Sigma$ 가 생긴다.

$\Sigma$ 의 점 $(x,\lambda)$ 마다 $\phi(x)$ 의 고윳값 $\lambda$ 에 대한 고유벡터의 직선이 하나 있다. 이 직선들을 모으면 $\Sigma$ 위의 [벡터다발](vector-bundles.md) 가운데 계수 $1$ 인 것, 곧 직선다발 $L$ 이 된다. 거꾸로 $\Sigma$ 위의 직선다발 $L$ 이 주어지면 $x$ 위의 두 점에서 $L$ 의 직선 두 개를 합쳐 $2$ 차원 공간을 만들고, 각 직선에 $\lambda$ 를 곱하는 사상을 $\phi(x)$ 로 둔다.

그래서 특성다항식을 고정한 $(E,\phi)$ 의 모임은 $\Sigma$ 위의 직선다발의 모임이고, 차수를 고정하면 $\Sigma$ 의 Jacobi 다양체다. 특성다항식을 정하는 자료는 $\mathrm{tr}\thinspace\phi$ 와 $\det\phi$ 두 함수이므로, 전체 공간은 이 두 함수의 공간 위에 Jacobi 다양체가 하나씩 놓인 꼴이다.

# 정의

## Higgs 다발

$C$ 를 종수 $g\ge 2$ 인 매끄러운 사영곡선, $K$ 를 그 표준 직선다발이라 한다. 계수 $n$ 인 벡터다발 $E$ 와 다발 사상 $\phi:E\to E\otimes K$ 의 쌍 $(E,\phi)$ 를 **Higgs 다발(Higgs bundle)** 이라 하고 $\phi$ 를 Higgs 장(Higgs field)이라 한다. 직관 절의 행렬값 함수는 $K$ 를 곱하지 않은 경우이고, $K$ 를 곱하면 $\mathrm{tr}\thinspace\phi$ 가 함수 대신 정칙 [미분형식](differential-forms.md)이 된다.

$\phi(F)\subseteq F\otimes K$ 인 모든 참 부분다발 $F$ 가 $\mu(F)\lt\mu(E)$ 를 만족하면 $(E,\phi)$ 가 안정이다. 기울기 $\mu$ 는 [벡터다발의 모듈라이 공간](moduli-of-vector-bundles.md)의 것과 같다. 계수 $n$, 차수 $d$ 인 안정 Higgs 다발의 모듈라이 공간을 $\mathcal M\_{\mathrm{H}}(n,d)$ 라 쓴다.

## Hitchin 사상

다음 사상을 **Hitchin 사상(Hitchin map)** 이라 한다.

$$
h:\mathcal M\_{\mathrm H}(n,d)\to\mathcal A=\bigoplus_{i=1}^nH^0(C,K^i),\qquad (E,\phi)\mapsto(a_1,\dots,a_n)
$$

$a_i$ 는 다음 다항식의 계수이고 $K^i$ 의 정칙 단면이다.

$$
\det(\lambda-\phi)=\lambda^n+a_1\lambda^{n-1}+\dots+a_n
$$

$\mathcal A$ 를 Hitchin 밑공간(Hitchin base)이라 한다. 직관 절에서 $n=2$ 이고 $a_1=-\mathrm{tr}\thinspace\phi$, $a_2=\det\phi$ 다.

## 스펙트럼 곡선

$a\in\mathcal A$ 에 대해 $K$ 의 전체 공간 안의 곡선

$$
\Sigma_a=\lbrace\lambda\in K\_x:\lambda^n+a_1(x)\lambda^{n-1}+\dots+a_n(x)=0\rbrace
$$

을 **스펙트럼 곡선(spectral curve)** 이라 한다. 사영 $\pi:\Sigma_a\to C$ 는 $n$ 겹 분기 덮개다. 직관 절의 $\Sigma$ 가 $n=2$ 인 스펙트럼 곡선이다.

# 성질

## 차원

[Riemann–Roch 정리](riemann-roch.md)에 따라 $h^0(K)=g$ 이고 $i\ge 2$ 에서 $h^0(K^i)=(2i-1)(g-1)$ 이다. 더하면 다음이 나온다.

$$
\dim\mathcal A=g+\sum_{i=2}^n(2i-1)(g-1)=n^2(g-1)+1
$$

$\mathcal M\_{\mathrm H}(n,d)$ 의 차원은 $2(n^2(g-1)+1)$ 이고, 안정 벡터다발의 모듈라이 공간 $\mathcal N$ 의 [여접다발](cotangent-bundle.md) $T^\ast\mathcal N$ 을 열린 부분집합으로 포함한다. 그래서 $\dim\mathcal A$ 는 $\mathcal M\_{\mathrm H}$ 의 차원의 절반이다.

## 스펙트럼 대응

$\Sigma_a$ 가 매끄러우면 $h^{-1}(a)$ 는 $\Sigma_a$ 위의 정해진 차수의 직선다발들의 모임, 곧 $\Sigma_a$ 의 Jacobi 다양체와 동형이다. $L$ 에 $(\pi\_\ast L,\thinspace\pi\_\ast(\lambda\cdot))$ 를 대응시키는 것이 그 동형이다. Beauville, Narasimhan, Ramanan 이 증명했다[^1]. 이것을 BNR 대응(Beauville–Narasimhan–Ramanan correspondence)이라 한다.

## 완전 적분계

Hitchin 은 $\mathcal M\_{\mathrm H}$ 가 심플렉틱 구조를 갖고, $h$ 의 성분 함수들이 서로 Poisson 가환이며 그 수가 $\dim\mathcal M\_{\mathrm H}/2$ 임을 보였다[^2]. 그래서 $h$ 는 [적분가능계](integrable-systems.md)이고, 일반 올인 Jacobi 다양체는 그 계의 Lagrangian 원환면의 복소판이다. $h$ 는 고유 사상(proper map)이어서 올이 모두 콤팩트하다.

## 비가환 Hodge 대응

Hitchin, Donaldson, Corlette, Simpson 의 정리에 따라 $\mathcal M\_{\mathrm H}(n,0)$ 은 $\pi_1(C)$ 의 $n$ 차원 반단순 표현의 모듈라이 공간과 위상동형이다[^3]. 이 대응을 비가환 Hodge 대응(nonabelian Hodge correspondence)이라 한다. [Riemann–Hilbert 대응](riemann-hilbert-correspondence.md)이 표현을 평탄 [접속](connection.md)과 잇고, 비가환 Hodge 대응이 표현을 Higgs 다발과 잇는다. 두 동형은 복소구조가 다르다.

# 활용

- [기본 보조정리](fundamental-lemma.md). Ngô 는 [유한체](finite-fields.md) 위 곡선의 Hitchin 올뭉치를 쓰고, 그 올이 아핀 Springer 올의 곱으로 분해된다는 것과 지지 정리로 궤도적분의 등식을 증명했다[^4].
- [기하학적 Langlands 강령](geometric-langlands.md). Hausel 과 Thaddeus 는 $\mathrm{SL}\_n$ 과 $\mathrm{PGL}\_n$ 의 Hitchin 올뭉치가 같은 밑공간 위에서 서로 쌍대인 원환면을 올로 가짐을 보였다[^5]. 두 군은 Langlands 쌍대다.

[^1]: A. Beauville, M. S. Narasimhan, S. Ramanan, "Spectral curves and the generalised theta divisor", Journal für die reine und angewandte Mathematik **398** (1989), 169–179.
[^2]: N. Hitchin, "Stable bundles and integrable systems", Duke Mathematical Journal **54** (1987), 91–114.
[^3]: C. Simpson, "Higgs bundles and local systems", Publications Mathématiques de l'Institut des Hautes Études Scientifiques **75** (1992), 5–95. 계수 $2$ 의 경우는 N. Hitchin, "The self-duality equations on a Riemann surface", Proceedings of the London Mathematical Society **55** (1987), 59–126.
[^4]: B. C. Ngô, "Le lemme fondamental pour les algèbres de Lie", Publications Mathématiques de l'Institut des Hautes Études Scientifiques **111** (2010), 1–169.
[^5]: T. Hausel, M. Thaddeus, "Mirror symmetry, Langlands duality, and the Hitchin system", Inventiones Mathematicae **153** (2003), 197–229.

# 연관 문서

## 선수지식

- [벡터다발의 모듈라이 공간](moduli-of-vector-bundles.md)
- [적분가능계](integrable-systems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #differential_geometry #number_theory
