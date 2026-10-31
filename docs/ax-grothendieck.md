# Ax–Grothendieck 정리

# 개요

**Ax–Grothendieck 정리(Ax–Grothendieck theorem)** 는 복소 아핀 공간에서 자기 자신으로 가는 단사인 다항식 사상이 전사라는 정리다. $\mathbb C^n$ 은 무한집합이라, 유한집합에서 단사이면 전사라는 비둘기집 논증이 직접 쓰이지 않는다. 증명은 같은 진술을 유한체에서 확인한 뒤 [모형론](model-theory.md)의 이전 원리로 [복소수](complex-numbers.md)까지 옮긴다.

# 직관

$f:\mathbb C\to\mathbb C$ 가 $f(z)=z^2$ 이면 $f(1)=f(-1)$ 이므로 단사가 아니다. 한 변수에서 단사인 다항식은 $az+b$ ($a\neq 0$) 꼴뿐이고 이들은 전사다. 차수가 $2$ 이상인 다항식이 단사가 아니라는 것은 대수학의 기본 정리(fundamental theorem of algebra)로 보인다.

변수가 여럿이면 이 논증이 통하지 않는다. $(x,y)\mapsto(x,y+x^2)$ 은 단사이고, 역사상 $(x,y)\mapsto(x,y-x^2)$ 이 있으므로 전사다. 반면 [유한체](finite-fields.md) $\mathbb F_q$ 위에서는 $\mathbb F_q^n$ 이 유한집합이므로 단사인 다항식 사상은 전사다. $\mathbb F_5$ 에서 $x\mapsto x^3$ 은 $0,1,2,3,4$ 를 $0,1,3,2,4$ 로 보내는 단사이고, 따라서 전사다.

$\mathbb C^n$ 은 무한집합이라 이 셈을 그대로 쓸 수 없다. 그런데 차수와 변수의 개수를 고정하면 "단사이면 전사다" 는 계수를 한정사(quantifier)로 묶은 문장 하나로 적힌다. 이 문장이 유한체를 모두 합친 특성 $p$ 의 체에서 참이고 모든 소수 $p$ 에서 그렇다면, [모형론](model-theory.md)의 논법으로 특성 $0$ 인 $\mathbb C$ 에서도 참이다.

# 정의

체 $k$ 위의 **다항식 사상(polynomial map)** $f:k^n\to k^n$ 은 성분이 $k\lbrack x_1,\dots,x_n\rbrack$ 의 원소인 사상

$$
f(x_1,\dots,x_n)=\bigl(f_1(x_1,\dots,x_n),\dots,f_n(x_1,\dots,x_n)\bigr)
$$

이다. 직관 절의 $(x,y)\mapsto(x,y+x^2)$ 은 성분 $f_1=x$, $f_2=y+x^2$ 의 차수가 $2$ 이하인 다항식 사상이다.

$\mathrm{ACF}\_p$ 는 특성 $p$ 인 대수적 닫힌 체(algebraically closed field)의 [1차 논리](first-order-logic.md) 이론이다. $p$ 는 $0$ 또는 소수다. $\mathbb C$ 는 $\mathrm{ACF}\_0$ 의 모형이고, $\mathbb F_p$ 의 대수적 폐포 $\overline{\mathbb F_p}$ 는 $\mathrm{ACF}\_p$ 의 모형이다. $\overline{\mathbb F_5}$ 는 $\mathbb F_5\subseteq\mathbb F_{25}\subseteq\mathbb F_{625}\subseteq\cdots$ 처럼 유한체들을 합친 체다.

# 성질

## Ax–Grothendieck 정리

$k$ 가 대수적 닫힌 체이고 $f:k^n\to k^n$ 이 다항식 사상일 때, $f$ 가 단사이면 전사다.[^1]

특히 $k=\mathbb C$ 에서 성립한다.

## 1차 문장 번역

고정된 $n$ 과 $d$ 에 대해 "차수 $d$ 이하의 다항식 사상이 단사이면 전사다" 는 체에 대한 1차 문장 $\sigma_{n,d}$ 가 된다. 계수를 한정사로 묶고, 단사성과 전사성을 각각 한정사로 쓴다.

$$
\sigma_{n,d}:\ \forall\thinspace\bar a\thinspace\bigl(\text{단사}(f_{\bar a})\to\text{전사}(f_{\bar a})\bigr)
$$

계수의 개수가 $n$ 과 $d$ 로 정해지므로 한정사가 유한 개다. 차수 제한을 풀면 1차 문장이 아니므로, 정리를 문장들의 모임 $\lbrace\sigma_{n,d}\rbrace$ 로 쪼개는 것이 증명의 첫 단계다.

## 특성 p 에서의 증명

$k$ 가 특성 $p$ 인 대수적 닫힌 체이면 $k$ 는 $\overline{\mathbb F_p}$ 를 포함하고, 다항식 사상 $f$ 의 계수는 유한 개다.

$f$ 가 단사라 하고 $y\in k^n$ 을 잡는다. $y$ 의 좌표와 $f$ 의 계수를 모두 담는 유한체 $\mathbb F_q\subseteq\overline{\mathbb F_p}$ 가 있고, $f$ 는 $\mathbb F_q^n$ 을 자기 자신으로 보낸다. 유한집합 위의 단사 함수는 전사이므로 $f(x)=y$ 인 $x\in\mathbb F_q^n$ 이 있다. $y$ 가 임의이므로 $f$ 가 전사다.

## 특성 0 이전

$\sigma$ 가 체에 대한 1차 문장이고 충분히 큰 모든 소수 $p$ 에 대해 $\mathrm{ACF}\_p\models\sigma$ 이면 $\mathrm{ACF}\_0\models\sigma$ 다.

$\mathrm{ACF}\_0\not\models\sigma$ 라 하면 $\mathrm{ACF}\_0\cup\lbrace\neg\sigma\rbrace$ 가 모형을 갖는다. 특성 $0$ 은 $1+\dots+1\ne0$ 이라는 문장 무한 개로 쓰이므로, 콤팩트성 정리(compactness theorem)를 쓰면 유한 부분집합만 만족하는 모형이 있고 그것은 충분히 큰 어떤 특성 $p$ 의 대수적 닫힌 체다. 그 체가 $\neg\sigma$ 를 만족해 가정에 어긋난다.

각 $\sigma_{n,d}$ 가 모든 특성 $p$ 에서 성립하므로 보조정리가 특성 $0$ 에서의 결론을 준다. $\mathrm{ACF}\_0$ 이 완전 이론(complete theory)이므로 $\mathbb C$ 에서도 같다.

[초곱](ultraproducts.md)을 쓰면 같은 논증을 한 줄로 줄인다. 특성 $p$ 인 대수적 닫힌 체들을 비주 초필터(non-principal ultrafilter)로 초곱하면 특성 $0$ 인 대수적 닫힌 체가 되고, Łoś 정리(Łoś's theorem)로 문장의 참이 초곱으로 옮겨진다.

## 역방향의 실패

전사이면서 단사가 아닌 다항식 사상이 있다. $n=1$ 에서 $f(z)=z^2$ 이 $\mathbb C$ 위에서 전사이고 단사가 아니다. 정리의 함의는 한 방향뿐이다.

# 활용

- 대수기하의 증명 이전. 특성 $p$ 에서 확인한 1차 성질을 특성 $0$ 으로 옮기는 논법의 표준 예다. 유한체의 점 세기를 쓸 수 있는 진술이면 같은 전략이 통한다.
- Jacobi 추측(Jacobian conjecture)과의 대비. Jacobi 추측은 특성 $0$ 에서 Jacobi 행렬식이 $0$ 아닌 상수인 다항식 사상이 다항식 역을 갖는다는 것이다. Ax–Grothendieck 으로는 단사에서 전사가 나오지만 역사상이 [다항식](polynomial-rings.md)인지는 나오지 않는다.
- 한정사 소거의 응용. 대수적 닫힌 체의 이론이 한정사 소거(quantifier elimination)를 가지므로, [구성가능 집합](constructible-sets.md)의 상이 구성가능하다는 Chevalley 정리(Chevalley's theorem)가 같은 논법으로 나온다.

[^1]: James Ax, *The elementary theory of finite fields*, Ann. of Math. 88 (1968), 239–271. Grothendieck 은 EGA(Éléments de géométrie algébrique) IV, 10.4.11 에서 스킴으로 같은 결과를 얻었다.

# 연관 문서

## 선수지식

- [모형론](model-theory.md)
- [유한체](finite-fields.md)

## 더 알아보기

아직 연결한 문서가 없다.

#logic #algebra #field_theory #foundations
